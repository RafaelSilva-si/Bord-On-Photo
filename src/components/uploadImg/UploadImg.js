import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { DropContainer, UploadMessage } from '../../styles/upload';

export default class UploadImg extends Component {
	renderDragMessage = (isDragActive, isDragReject) => {
		if (!isDragActive) {
			return <UploadMessage>
                Arraste o arquivo para fazer o upload ...
            </UploadMessage>;
		}

		if (isDragReject) {
			return (
				<UploadMessage type="error">
					Arquivo não suportado
				</UploadMessage>
			);
		}

		return (
			<UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
		);
	};

	render() {
		const { onUpload, accept, message, multiple, ...rest } = this.props;

		return (
			<div className="container-upload">
                <h1>Foto</h1>
				<div className="content-upload">
					<Dropzone
						accept={accept}
						onDropAccepted={onUpload}
						multiple={multiple}
						{...rest}>
						{({
							getRootProps,
							getInputProps,
							isDragActive,
							isDragReject,
						}) => (
							<DropContainer
								{...getRootProps()}
								isDragActive={isDragActive}
								isDragReject={isDragReject}>
								<input {...getInputProps()} />
								{this.renderDragMessage(
									isDragActive,
									isDragReject,
									message,
								)}
							</DropContainer>
						)}
					</Dropzone>
				</div>
			</div>
		);
	}
}
