import { Edit } from "@mui/icons-material";
const More = ({ hide }) => {
  const handleEdit = () => {
    alert("edit");
  };
  return (
    <div className={hide === true ? " popup hide" : "popup"}>
      <ul className="popupMenu">
        <li className="popupOption" onClick={handleEdit}>
          <Edit />
          Edit post
        </li>
      </ul>
    </div>
  );
};

export default More;
