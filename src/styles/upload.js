import styled, { css } from 'styled-components';

const dragActive = css`
	border-color: #78e5d5;
`;

const dragReject = css`
	border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
	className: 'dropzone',
})`
	border: 1px dashed white;
	border-radius: 4px;
	cursor: pointer;
	transition: height 0.2s ease;
	${props => props.isDragActive && dragActive};
	${props => props.isDragReject && dragReject};
`;

const messageColors = {
	default: "white",
	error: "red",
	success: "green",
};

export const UploadMessage = styled.p`
	display: flex;
	color: ${props => messageColors[props.type || 'default']};
	justify-content: center;
	align-items: center;
	padding: 10px 10px 10px 10px;
`;