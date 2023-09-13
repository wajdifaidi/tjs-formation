import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../Button/Button";
import { store } from "../../store/store";
import { connect, useDispatch, useSelector } from "react-redux";
import { change } from "../../store/current";
import { saveCurrent } from "../../store/current";
const memeFormInitialState = {};

const MemeForm = (props) => {
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onReset={(evt) => {
          props.onMemeChange(initialFormLoadedDatas);
        }}
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onMemeSubmit(props.meme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
            //console.log(evt.target.value)
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="image"
          id="image"
          value={props.meme.imageId}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
            //console.log(evt.target.value)
          }}
        >
          <option value="-1">Pas d'image</option>
          {props.images.map((e, i) => (
            <option key={"opt-img-" + i} value={e.id}>
              {e.titre}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={props.meme.text}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
            //console.log(evt.target.value)
          }}
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, x: Number(evt.target.value) });
            //console.log(evt.target.value)
          }}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, y: Number(evt.target.value) });
            //console.log(evt.target.value)
          }}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, color: evt.target.value });
            //console.log(evt.target.value)
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              fontSize: Number(evt.target.value),
            });
            //console.log(evt.target.value)
          }}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, fontWeight: evt.target.value });
            //console.log(evt.target.value)
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          value={props.meme.underline}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              underline: evt.target.checked,
            });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          value={props.meme.italic}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, italic: evt.target.checked });
            //console.log(evt.target.value)
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={props.meme.frameSizeX}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              frameSizeX: Number(evt.target.value),
            });
            //console.log(evt.target.value)
          }}
        />
        px{" "}
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={props.meme.frameSizeY}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              frameSizeY: Number(evt.target.value),
            });
            //console.log(evt.target.value)
          }}
        />
        px
        <br />
        <Button type={"submit"}>OK</Button>
      </form>
    </div>
  );
};


export default MemeForm;
/*
export const MemeFormStoredData=(props)=>{
  const [images, setimages] = useState([]);
  useEffect(() => {
    setimages(store.getState().ressources.images);
    store.subscribe(()=>setimages(store.getState().ressources.images))
  }, [])
  

  return <MemeForm {...props} images={images} onMemeChange={(newMeme)=>{
    store.dispatch({type:'current/change',payload:newMeme})
  }}></MemeForm>
} */
/*
function mapDispatchToProps(dispatch) {
  return {
    onMemeChange: (newMeme) =>
      dispatch({ type: "current/change", payload: newMeme }),
  };
}
function mapStateToProps(storeState,ownProps) {
  return {
    ...ownProps,
    images: storeState.ressources.images,
  }
}
export const MemeFormStoredData=connect(mapDispatchToProps,mapStateToProps)(MemeForm);
*/
export const MemeFormStoredData = (props) => {
  const dispatch = useDispatch();
  const images = useSelector((s) => s.ressources.images);
  const c = useSelector((s) => s.current);

  return (
    <MemeForm
      {...props}
      images={images}
      meme={c}
      onMemeChange={(newMeme) => {
        //dispatch({ type: "current/change", payload: newMeme });
        dispatch(change(newMeme));
      }}
      onMemeSubmit={(newMeme) => {
        //dispatch({ type: "current/change", payload: newMeme });
        dispatch(saveCurrent(newMeme));
      }}
    ></MemeForm>
  );
};

