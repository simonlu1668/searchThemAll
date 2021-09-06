import React from 'react';
import { Button, TextField } from '@material-ui/core';
const Search = () => {
    return (
        <div>
            <TextField id="standard-basic" label="Find a movie!" />
            <Button style={{backgroundColor: "#21b6ae"}} variant="contained" color="primary">
                SEARCH
            </Button>
        </div>
    );
};

export default Search;