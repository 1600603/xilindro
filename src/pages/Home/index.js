import React, { useState } from 'react';
/* import {Provider } from 'react-redux';
import store from '../../store'; */
import {
	Container,
	Paper,
	TextField,
	Hidden,
	IconButton,
} from '@material-ui/core';
import 'typeface-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Fab from '@material-ui/core/Fab';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Header from '../../components/Header';
import FaseTabs from '../../components/FaseTabs';

// import { Container } from './styles';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange, teal, lightBlue } from '@material-ui/core/colors';
//import purple from '@material-ui/core/colors/purple';
//import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
	palette: {
		/* primary: teal,
		secondary: orange,
		 */
		//main: '#10BEC1'
		primary: {
			light: '#63f1f4',
			main: '#10bec1',
			dark: '#008d91',
			//contrastText: '#000000',
			contrastText: '#fff',
		},
		secondary: {
			main: '#f44336',
			light: '#ff7961',
			dark: '#ba000d',
			//contrastText: '#000000',
			contrastText: '#fff',
		},
		good: {
			main: '#0055a5',
			light: '#5181d7',
			dark: '#002d75',
			//contrastText: '#000000',
			contrastText: '#ffffff',
		},
	},
	status: {
		danger: 'orange',
	},
});

export default function Home() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Container maxWidth='md'>
					<Header />
					<FaseTabs />
					<div>
						Icon made by{' '}
						<a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
							Freepik
						</a>{' '}
						from{' '}
						<a href='https://www.flaticon.com/' title='Flaticon'>
							www.flaticon.com
						</a>
					</div>
				</Container>
			</ThemeProvider>
		</>
	);
}
