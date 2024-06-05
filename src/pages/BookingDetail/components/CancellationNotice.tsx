import React, { useState, useEffect } from 'react';
import { Modal } from 'zmp-ui';
import { useNavigate } from 'react-router';
import { useMutationCancelBookingMutation } from '../../../generated/graphql';

interface CancellationNoticeProps {
  id: number;
  show: boolean;
  onClose: () => void;
  fetchDataHistory?: () => void;
}

const CancellationNotice: React.FC<CancellationNoticeProps> = ({
  id,
  show,
  onClose,
  fetchDataHistory,
}) => {
  const [cancelReason, setCancelReason] = useState('');
  const navigate = useNavigate();

  const [cancelBooking] = useMutationCancelBookingMutation({
    fetchPolicy: 'no-cache',
  });

  const handleCancelBooking = async () => {
    try {
      await cancelBooking({
        variables: { bookingId: id, reason: cancelReason || ' ' },
      });
      if (fetchDataHistory) {
        fetchDataHistory();
      }
      onClose();
      navigate(`/history`, { replace: true });
    } catch (error) {
      console.error('Lỗi khi hủy chuyến:', error);
    }
  };

  return (
    <div>
      <Modal
        visible={show}
        title={<span className="text-lg font-semibold">Hủy chuyến đi</span>}
        onClose={onClose}
        actions={[
          {
            text: 'Hủy',
            close: true,
            onClick: onClose,
          },
          {
            text: 'Hủy chuyến',
            highLight: true,
            onClick: handleCancelBooking,
          },
        ]}
      >
        <div className="py-6">
          Bạn đang hủy chuyến đi này, thông tin đặt xe sẽ bị hủy.
        </div>
        <div>Nhập lý do hủy chuyến để ứng dụng hỗ trợ bạn tốt hơn nhé!</div>
        <div>
          <p className="mt-5 mb-3 font-bold text-sm">Lý do hủy chuyến</p>
          <textarea
            placeholder="Lý do hủy chuyến đi"
            className="w-full min-h-32 rounded-xl border-[1px] border-[#AAB9C5] p-3 text-sm focus:outline-none"
            value={cancelReason}
            onChange={(e) => setCancelReason(e.target.value)}
          ></textarea>
        </div>
      </Modal>
    </div>
  );
};

export default CancellationNotice;
