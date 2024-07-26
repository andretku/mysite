import { Button, Stack, TextField } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const EnglishPage = () => {
  const [enValue, setEnValue] = useState('')
  const [ruValue, setRuValue] = useState('')



  return (
    <div className='body-container body-container_main hello'>
      English

      <Stack
        sx={{
          width: '80%',
          borderRadius: 2,
          padding: 2,
          minWidth: 300,
          boxShadow: 1,
          display: 'flex',
          flexDirection: 'row',
          gap: 1.5,
          bgcolor: 'white',
        }}
      >
        <TextField
          id="outlined-controlled"
          label="english"
          size='small' 
          fullWidth 
          value={enValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEnValue(event.target.value);
          }}
        />
        <TextField
          id="outlined-controlled"
          label="russian"
          size='small'    
          fullWidth 
          value={ruValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRuValue(event.target.value);
          }}
        />
        <Button 
          variant="contained"          
        >Save</Button>
        </Stack>


      <Link to='cards'>Cards game</Link>
      <Link to='vocab'>Vocabulary</Link>
      <Link to='allcards'>All cards</Link>


    </div>
  )
}

export default EnglishPage