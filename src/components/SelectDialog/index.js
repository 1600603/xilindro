import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
	Divider,
	Paper,
	Chip,
	IconButton,
	Select,
	useMediaQuery,
	MenuItem,
	InputLabel,
	FormControl,
} from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
//import Autocomplete from '@material-ui/lab/Autocomplete';

import {
	/* 	fade,
	ThemeProvider,
	withStyles,
 */ makeStyles,
	//	createMuiTheme
	useTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	box: {
		margin: theme.spacing(1),
		alignSelf: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	nextButton: {
		//justifySelf:'flex-end'
		//display: 'flex',
		marginTop: theme.spacing(2),
		alignSelf: 'flex-end',
	},
	topic: {
		display: 'flex',
		alignItems: 'center',
		//marginTop: theme.spacing(4)
		//marginBottom: theme.spacing(2)
	},
	endLabel: {
		marginTop: theme.spacing(4),
		alignSelf: 'flex-end',
		fontWeight: 'bold',
		//marginBottom: theme.spacing(2)
	},
	textColor: {
		color: theme.palette.primary.main,
	},
	topText: {
		marginTop: theme.spacing(1),
		fontWeight: 'bold',
		alignSelf: 'flex-end',
	},
	selectControl: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 0,
		//marginRight:55,
		//color: 'green',
		//marginRight: 30,

		//color: 'red',
		//margin: 100
	},
	sugestionLegend: {
		color: theme.palette.text.hint,
		marginTop: theme.spacing(1),
		//fontWeight: 'bold',
		alignSelf: 'flex-end',
		maxWidth: 300,
		textAlign: 'right',
	},
	calculatedPunishment: {
		alignSelf: 'flex-end',
		textAlign: 'right',
		color: theme.palette.text.hint,
		fontWeight: 'bold',
	},
	radioItemFavorable: {
		//color: theme.palette.primary.main
		color: theme.palette.primary.main,
	},
	radioItemNeutral: {
		color: theme.palette.grey[600],
	},
	radioItemNotFavorable: {
		color: theme.palette.secondary.dark,
	},
	labelRadio: {
		//color: 'green',
		marginRight: 32,
	},
	floatRight: {
		alignSelf: 'flex-end',
		marginRight: 0,
	},
	headerLine: {
		display: 'flex',
		flexDirection: 'row',
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(1),
		alignItems: 'center',
		//justifyContent: 'center'
	},
	headerButton: {
		marginLeft: theme.spacing(1),
	},
	headerPunishiment: {
		flex: 1,
		textAlign: 'right',
		//color: theme.palette.secondary.light
	},
	chipContainer: {
		padding: theme.spacing(1),
		//marginTop: theme.spacing(1),
		display: 'flex',
		//justifyContent: 'center',
		//justifyContent: 'space-between',
		flexWrap: 'wrap',
		'& > *': {
			//margin: theme.spacing(0.5),
			marginTop: theme.spacing(0.5),
			marginBottom: theme.spacing(0.5),
			marginRight: theme.spacing(0.5),
		},
	},
	fractionLabel: {
		marginTop: theme.spacing(2),
		marginBottom: theme.spacing(1),
		fontSize: 12,
	},
	formControl: {
		//margin: theme.spacing(1),
		marginTop: theme.spacing(2),
		minWidth: theme.spacing(5),
		display: 'flex',
		flexDirection: 'column',
		//alignItems: 'center',
	},
	fractionContainer: {
		marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		//minWidth: theme.spacing(5),

		alignItems: 'center',
		flexWrap: 'nowrap',
	},
	slashBar: {
		fontSize: '2em',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		//fontWeight: 'bold'
	},
}));

export default function SelectDialog({
	label,
	color,
	itemName,
	descriptionPlaceholder,
	defaultNumerator,
	defaultDivider,
	changeType,
	field,
	setField,
}) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [description, setDescription] = useState('');
	const [numerator, setNumerator] = React.useState(defaultNumerator);
	const [divider, setDivider] = React.useState(defaultDivider);
	const isSm = useMediaQuery(theme.breakpoints.down('sm'));
	const numberList = []

	for (let i=0; i< 100; i++) numberList[i] = i+1

	const maxChars = (sentence, maxLength) => {
		return sentence.substring(0, maxLength)+ (sentence.length>maxLength?'...':'')
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleAdd = (e) => {
		if (description === '') {
			alert('Inclua uma descrição');
			return;
		}
		let id;
		console.log(field);
		if (field.length === 0) {
			id = 0;
		} else {
			id = field[field.length - 1].id + 1;
		}
		const newItem = {
			id,
			description,
			numerator,
			divider,
		};
		//field.push(newItem);
		setField([...field, newItem]);
		setDescription('');
		setOpen(false);
	};

	const handleDelete = (id) => {
		//console.info('You clicked the delete icon.');
		let temp = field.filter((item) => item.id !== id);
		setField(temp);
	};

	return (
		<>
			<div className={classes.headerLine}>
				<Typography variant='h6' className={classes.topic}>
					{label}
					{/* <Tooltip title={`
                    Preencha as penas mínimas
                    Exemplo:
                    Furto. Pena mínima 1 ano; Pena máxima 5 anos
                `}>					
					<EmojiObjects style={{ marginLeft: 16 }} />
				</Tooltip> */}
				</Typography>

				<IconButton
					aria-label={`Adicionar $({itemName})`}
					color='default'
					className={classes.headerButton}
					onClick={() => setOpen(true)}
				>
					<AddCircleIcon />
				</IconButton>

				{/* <Typography
					className={classes.headerPunishiment}
					style={{ color: theme.palette[color].light }}
				>
					+1/6
				</Typography> */}
			</div>
			{/* <Divider /> */}
			<Paper className={classes.chipContainer}>
				{field.length > 0 &&
					field.map((item) => (
						<Chip
							key={item.id}
							label={maxChars(item.description,20) + ` ${changeType ==='minus'?'-':'+'}${item.numerator}/${item.divider}`}
							onDelete={() => handleDelete(item.id)}
							size='small'
							color='primary'
							style={{
								backgroundColor: theme.palette[color].light,
								color: theme.palette[color].contrastText,
							}}
						/>
					))}
				{field.length === 0 && 'Não há ' + itemName}
				{/* <Chip
					label='Reincidência +1/6'
					onDelete={handleDelete}
					size='small'
					color='primary'
					style={{
						backgroundColor: theme.palette[color].light,
						color: theme.palette[color].contrastText,
					}}
				/>
				<Chip
					label='Reincidência +1/6'
					onDelete={handleDelete}
					size='small'
					color='primary'
					style={{
						backgroundColor: theme.palette[color].light,
						color: theme.palette[color].contrastText,
					}}
				/>
				<Chip
					label='Reincidência +1/6'
					onDelete={handleDelete}
					size='small'
					color='primary'
					style={{
						backgroundColor: theme.palette[color].light,
						color: theme.palette[color].contrastText,
					}}
				/>
				<Chip
					label='Reincidência +1/6'
					onDelete={handleDelete}
					size='small'
					color='primary'
					style={{
						backgroundColor: theme.palette[color].light,
						color: theme.palette[color].contrastText,
					}}
				/>
				<Chip
					label='Reincidência +1/6'
					onDelete={handleDelete}
					size='small'
					color='primary'
					style={{
						backgroundColor: theme.palette[color].light,
						color: theme.palette[color].contrastText,
					}}
				/> */}
			</Paper>

			{/* 	<Button variant='outlined' color='primary' onClick={handleClickOpen}>
				Open form dialog
			</Button> */}
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'
				fullWidth
				maxWidth='xs'
			>
				<DialogTitle id='form-dialog-title'>Adicionar {itemName}</DialogTitle>
				<DialogContent>
					{/* <DialogContentText>
						To subscribe to this website, please enter your email address here.
						We will send updates occasionally.
					</DialogContentText> */}
					<TextField
						autoComplete='off'
						autoFocus
						margin='dense'
						id='description'
						label='Descrição'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						placeholder={descriptionPlaceholder}
						//placeholder={changeType}
						//type='email'
						fullWidth
						InputLabelProps={{
							shrink: true,
						}}
					/>
					
					<FormControl className={classes.formControl} id='fraction-container'>
						<InputLabel
							disableAnimation
						
						>
							{changeType === 'plus' ? 'Acréscimo' : 'Decréscimo'}
						</InputLabel>
						<div className={classes.fractionContainer}>
							<Select
								native //={isSm}
								value={numerator}
								onChange={(e) => setNumerator(e.target.value)}
								inputProps={{
									name: 'numerator',
									id: 'numerator',
								}}
								aria-label='numerador do acréscimo'
							>
						
								{
									numberList.map(n => <option value={n}>{n}</option>)
								}
								 
								
					
							</Select>
							<div className={classes.slashBar}>/</div>
							<Select
								native //={isSm}
								value={divider}
								onChange={(e) => setDivider(e.target.value)}
								inputProps={{
									name: 'numerator',
									id: 'numerator',
								}}
								aria-label='divisor do acréscimo'
							>
								{
									numberList.map(n => <option value={n}>{n}</option>)
								}
							</Select>
						</div>
					</FormControl>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='primary'>
						Cancelar
					</Button>
					<Button onClick={handleAdd} color='primary' variant='contained'>
						Adicionar
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
