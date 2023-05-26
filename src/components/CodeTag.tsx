import React from "react";

interface ICodeTag {
	tag: string;
}

export default function CodeTag(props: ICodeTag) {
	return <span className="badge text-bg-primary me-1">{props.tag}</span>;
}
