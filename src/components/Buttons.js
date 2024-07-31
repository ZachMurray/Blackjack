import * as React from 'react';
import Button from '@mui/material/Button';
import DrawCard from './DrawCard';
import ShuffleCards from './ShuffleCards';
import { ButtonGroup } from '@mui/material';

export default function Buttons() {
    return (
        <ButtonGroup>
            <DrawCard />
            <ShuffleCards />
            <Button href="#text-buttons">Link</Button>
        </ButtonGroup>
    );
}