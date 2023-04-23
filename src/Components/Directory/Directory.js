import React, { useState } from 'react';
import { AiOutlineFolder} from 'react-icons/ai';

const Directory = ({ file }) => {
  const [folder, setFolder] = useState(file);
  const [previousFolders, setPreviousFolders] = useState([]);

  const handleFolderClick = (item) => {
    setPreviousFolders([...previousFolders, folder]);
    setFolder(item);
  };

  const handleBackClick = () => {
    if (previousFolders.length > 0) {
      const previousFolder = previousFolders[previousFolders.length - 1];
      const newPreviousFolders = previousFolders.slice(0, -1);
      setFolder(previousFolder);
      setPreviousFolders(newPreviousFolders);
    }
  };

  return (
    <div className="folder-container">
      {previousFolders.length > 0 && (
        <button onClick={handleBackClick}>Go back</button>
      )}
      {folder.items.map((item, index) =>
        item.type === "folder" ? (
          <span
            className="folder"
            onClick={() => handleFolderClick(item)}
            key={index}
          >
            <AiOutlineFolder />
            <span>{item.name}</span>
          </span>
        ) : (
          <span className="file" key={index}>
            {item.name}
          </span>
        )
      )}
    </div>
  );
};

export default Directory;
