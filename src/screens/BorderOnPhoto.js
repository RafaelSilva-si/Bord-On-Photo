import Resizer from "react-image-file-resizer";
import React from 'react';
import UploadFrame from '../components/uploadFrame/uploadFrame';
import UploadImg from '../components/uploadImg/UploadImg';
import * as Result from '../styles/result';

class BorderOnPhoto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFrame: false,
            UploadedImg: false
        };

    }

    handleUploadFrame = async (upload) => {
        const base = await new Promise((resolve) => {
            Resizer.imageFileResizer(
                upload[0],
                1080,
                1080,
                "PNG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64",
                1080,
                1080
            );
        });

        this.setState({
            uploadedFrame: base,
        });
    }

    handleUploadImg = async (upload) => {
        const base = await new Promise((resolve) => {
            Resizer.imageFileResizer(
                upload[0],
                1080,
                1080,
                "PNG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64",
                1080,
                1080
            );
        });

        this.setState({
            uploadedImg: base,
        });
    }


    onDelete = () => {
        const { onDeleteFile } = this.props;
        this.setState({
            uploadedFiles: false,
        });
        onDeleteFile();
    };

    render() {
        const { uploadedFrame, uploadedImg } = this.state;
        console.log(uploadedImg)
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <UploadFrame
                            onUpload={this.handleUploadFrame}
                        />
                    </div>
                    <div className="col-md-6">
                        <UploadImg
                            onUpload={this.handleUploadImg}
                        />
                    </div>
                </div>
                <div className="row p-5 d-flex justify-content-center">
                    <Result.ResultImgFrame src={uploadedFrame} />
                    <Result.ResultImgPhoto src={uploadedImg} />
                </div>
            </div>
        );
    }
}

export default BorderOnPhoto;
