import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { FormLabel, FormControl,InputLabel,Input } from '@material-ui/core';



function Form() {
    return (
        <div align="center">
                <form >
                    <h1>Formularz</h1>

                    <FormControl margin="normal" fullWidth>
                        <FormLabel>Imie</FormLabel>
                        <InputLabel></InputLabel>
                        <Input type="text" />
                    </FormControl>

                    <FormControl margin="normal" fullWidth>
                        <FormLabel>Nazwisko</FormLabel>
                        <InputLabel></InputLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl margin="normal" fullWidth>
                        <FormLabel>Napisz dwa zdania o sobie</FormLabel>
                        <TextField label="text" variant="filled" />
                        
                    </FormControl>

                    <FormControl margin="normal">
                        <FormLabel>Płeć</FormLabel>
                        <RadioGroup value={true}>
                            <FormControlLabel value="female" control={<Radio checked = {true}/>} label="kobieta" />
                            <FormControlLabel value="male" control={<Radio />} label="mężczyzna" />
                        </RadioGroup>
                    </FormControl>
                    <br></br>

                    <Button variant="contained" color="primary" size="medium">Prześlij</Button>

                </form>


        </div>
    )
}

export default Form