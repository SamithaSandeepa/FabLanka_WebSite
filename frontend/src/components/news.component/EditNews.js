import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../../config/index";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditNews = (props) => {
  console.log(props.content);

  //validation state
  const [validated, setValidated] = useState(false);
  //set all data to the state
  const [title, setTitle] = useState(props?.title);
  const [summery, setSummery] = useState(props?.summery);
  const [editorState, setEditorState] = useState(() => {
    const contentState = convertFromRaw(JSON.parse(props.content));
    return EditorState.createWithContent(contentState);
  });
  const [image, setImage] = useState(props?.image);
  const [status, setStatus] = useState(props?.status);

  // update news data to the database
  const onSubmit = (e) => {
    // the raw state, stringified
    const content = JSON.stringify(
      convertToRaw(editorState.getCurrentContent())
    );
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      const news = {
        title: title,
        summery: summery,
        content: content,
        image: image,
        status: status,
      };
      // console.log(content);
      axios
        .put(`${API_URL}/api/newspage/${props.id}/`, news)
        .then((res) => {
          console.log(res);
          window.location.href = "/admin/news/all";
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setValidated(true);
  };

  return (
    <>
      <div className="body">
        <div className="container1">
          <div className="col-md-8 mt-4 mx-auto">
            <h2 className="h3 mb-3 font-weight-normal text-center">
              Edit News
            </h2>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  News Title
                </label>
                <input
                  type="text"
                  required
                  minLength="2"
                  value={title}
                  className="form-control"
                  placeholder="Enter News Title"
                  id="newsTitle"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Item Name
                </Form.Control.Feedback>
              </div>
              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Summery{" "}
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Summarize your news"
                  id="summery"
                  value={summery}
                  onChange={(e) => {
                    setSummery(e.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Price
                </Form.Control.Feedback>
              </div>
              <div className="row">
                <div
                  className="form-group col-md-8"
                  style={{ marginBottom: "15px" }}
                >
                  <label className="form-label" style={{ marginBottom: "5px" }}>
                    {" "}
                    Image{" "}
                  </label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Enter Image Url"
                    id="image"
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a Image Url
                  </Form.Control.Feedback>
                </div>
                <div
                  className="form-group col-md-4 text-center m-auto"
                  style={{ marginBottom: "15px" }}
                >
                  <select
                    className=" btn btn-secondary btn-sm dropdown-toggle rounded-3 bg-color-white"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  >
                    <option disabled hidden>
                      Select your option
                    </option>
                    <option value={true}>Active</option>
                    <option value={false}>Inactive</option>
                  </select>
                </div>
              </div>

              <div className="form-group" style={{ marginBottom: "15px" }}>
                <label className="form-label" style={{ marginBottom: "5px" }}>
                  {" "}
                  Add News Content{" "}
                </label>
                <div className="editor">
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={setEditorState}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                    }}
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="btn btn-success float-right"
                style={{ marginTop: "15px", marginBottom: "15px" }}
              >
                <i className="far fa-check-square"></i>
                &nbsp; Save
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditNews;
