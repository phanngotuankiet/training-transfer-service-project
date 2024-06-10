import React, { useState, useEffect } from 'react';

const Note = ({ note, onChange, isDisabled }) => {
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    if (note) {
      setNoteText(note);
    }
  }, [note]);

  const handleOnChangeNoteText = (value) => {
    setNoteText(value);
  };
  return (
    <div>
      <p className="mt-5 mb-3 font-bold text-sm">Ghi chú</p>
      <textarea
        onChange={(e) => {
          handleOnChangeNoteText(e.target.value);
          onChange(e.target.value);
        }}
        value={noteText}
        placeholder="Nhập ghi chú về địa điểm đón, số người,..."
        className="w-full min-h-30 rounded-xl border-[1px] border-[#AAB9C5] p-3 text-xs focus:outline-none"
        disabled={isDisabled}
      ></textarea>
    </div>
  );
};

export default Note;
