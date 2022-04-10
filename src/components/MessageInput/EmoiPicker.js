import Picker from "emoji-picker-react";

const EmoiPicker = ({ setMessage, setIsPickerOpen }) => {
  const handleEmojiClick = (event, emoi) => {
    setMessage(prevState => {
      return `${prevState}  ${emoi.emoji} `;
    });
    setIsPickerOpen(false);
  };

  return (
    <Picker
      onEmojiClick={handleEmojiClick}
      groupVisibility={{
        flags: false,
        symbols: false,
        objects: false,
        recently_used: false,
      }}
      groupNames={{
        smileys_people: "Faces",
        animals_nature: "Animals",
        food_drink: "Food",
        travel_places: "Travels",
        activities: "Activites",
        flags: "fun with flags",
      }}
      disableSearchBar={true}
      pickerStyle={{
        width: "100%",
        height: "200px",
        display: "flex",
        position: "absolute",
        top: -200,
        left: 0,
      }}
    />
  );
};

export default EmoiPicker;
