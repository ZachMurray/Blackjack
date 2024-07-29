import * as React from 'react';
import Button from '@mui/material/Button';
import DrawCard from './DrawCard';
import ShuffleCards from './ShuffleCards';
import { Toolbar } from '@mui/material';

export default function Buttons() {
    return (
        <Toolbar>
          <DrawCard />
          <ShuffleCards />
          <Button href="#text-buttons">Link</Button>
        </Toolbar>
    );
}