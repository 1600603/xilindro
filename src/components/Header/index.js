import React from 'react';
import { Box, Typography, SvgIcon } from '@material-ui/core';
import Image from 'material-ui-image';

import Logo from '../../images/logo.svg';

//#10BEC1

export default function Header() {
	return (
		<Box
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='center'
		>
			<Image
				src={Logo}				
				style={{
					padding: 50,
					background: 'transparent',
					marginTop: 16
				}}
			/>
			<Typography
                variant='h3'
                component="h1"
				style={{
					marginTop: 16
                }}
                gutterBottom
			>
				Xilindró
			</Typography>
		</Box>
	);
}
