import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {useDispatch, useSelector} from 'react-redux';
import {updateLanguage} from '../redux/Reducer/TranslateReducer'
import czFlag from '../img/czFlagIcon.png'
import ruFlag from '../img/ruFlagIcon.png'
import usFlag from '../img/usFlagIcon.png'


const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: 60,
    color: "white",
    marginBottom: 21,
    flexDirection: 'row'

  },
  InputLabel:{
    color: "white",
  },
  Select:{
    color: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: "white",
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 7,
    marginTop: 23,
    marginLeft: 7
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const lang = useSelector((state) => state.Translate.setLanguage)
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateLanguage(event.target.value))
  };


  let chooseFlag = (lang === 'ru') ? ruFlag :
      (lang === 'eng') ? usFlag :
          (lang === 'cz') ? czFlag :
              '';

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={lang}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value='ru'>ru</MenuItem>
          <MenuItem value='eng'>eng</MenuItem>
          <MenuItem value='cz'>cz</MenuItem>
        </Select>
        <img src= {chooseFlag} className={classes.img} alt="flag"/>
      </FormControl>
    </div>
    )
}      