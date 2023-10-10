import {
	BiSignal2,
	BiSignal3,
	BiSignal5,
	BiDotsHorizontal,
} from "react-icons/bi";
import { FiAlertTriangle } from "react-icons/fi";
import { RiTodoLine } from "react-icons/ri";
import { MdOutlineCloudDone } from "react-icons/md";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaBarsProgress } from "react-icons/fa6";

export default function NewHeader({ grp }) {
	return (
		<>
			{grp === "No priority" && (
				<span>
					<BiDotsHorizontal />
				</span>
			)}
			{grp === "Low" && (
				<span>
					<BiSignal2 />
				</span>
			)}
			{grp === "Medium" && (
				<span>
					<BiSignal3 />
				</span>
			)}
			{grp === "High" && (
				<span>
					<BiSignal5 />
				</span>
			)}
			{grp === "Urgent" && (
				<span>
					<FiAlertTriangle style={{ color: "red" }} />
				</span>
			)}
			{grp === "Todo" && (
				<span>
					<RiTodoLine />
				</span>
			)}
			{grp === "done" && (
				<span>
					<MdOutlineCloudDone />
				</span>
			)}
			{grp === "Backlog" && (
				<span>
					<AiOutlineExclamationCircle />{" "}
				</span>
			)}
			{grp === "In progress" && (
				<span>
					<FaBarsProgress />
				</span>
			)}
		</>
	);
}
