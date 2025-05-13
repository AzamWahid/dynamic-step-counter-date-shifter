import * as React from 'react';
import PropTypes from 'prop-types';
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={value}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    value: PropTypes.node,
};







export default function CustomizedSlider({ value, onChange }) {
    return (
        <Box sx={{ width: 320 }}>

            <Box sx={{ m: 3 }} />
            <Slider
                value={value}
                onChange={onChange}
                valueLabelDisplay="auto"
                slots={{
                    valueLabel: ValueLabelComponent,
                }}
                aria-label="custom thumb label"
                min={0}
                max={100}
            />

        </Box>
    );
}