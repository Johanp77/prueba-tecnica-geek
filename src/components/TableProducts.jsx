import React, { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { DB } from '../firebase/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { readRecipeAsync } from '../redux/actions/firebaseActions';
import { ButtonBase, Checkbox, Grid, TextField, Typography } from '@mui/material';
import './styles/tableStyles.css'
import Home from './Home';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const TableProducts = () => {

  const dispatch = useDispatch()

  const [ingredients, setIngredients] = useState(false)

  const [value, setValue] = useState('1')


  const { recipe } = useSelector(store => store.firebaseReducers)
  console.log(recipe)
  useEffect(() => {
    dispatch(readRecipeAsync())
  }, [dispatch])
  const myElement = <Home brand="Ford" />
  return (
    myElement,
    console.log(value),
    <div>

      <form>
        {
          recipe.map((p, index) => (
            <>
              <div key={index} className="father">
                <div>
                  <Grid container spacing={2} >
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          onChange={ event=> setValue(event.target.value)}
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          min="0"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[0].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[0].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[0].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[0].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2} className="bg-color">
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[1].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[1].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[1].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[1].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2} >
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[2].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[2].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[2].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[2].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2} className="bg-color">
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[3].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[3].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[3].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[3].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2} >
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[4].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[4].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[4].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[4].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                  <Grid container spacing={2} className="bg-color">
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[5].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[5].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[5].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[5].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
                <div>
                <Grid container spacing={2}>
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Checkbox {...label} defaultChecked />
                        <TextField
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue="1"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                        {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
                      </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography gutterBottom variant="h6" component="div">
                            {p.ingredients[6].product}
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {p.ingredients[6].brand}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {p.ingredients[6].quantity}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Remove
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle1" component="div" color="green">
                          {p.ingredients[6].price}€
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </>
          ))
        }
      </form>
    </div>

  )
}

export default TableProducts