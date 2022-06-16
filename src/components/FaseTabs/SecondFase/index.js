import React, { useEffect, useState } from 'react';
//import { AppBar, Tabs, Tab, Typography, Box, Paper } from '@material-ui/core/';
// import { Container } from './styles';

import {
	Typography,
	Box,
	TextField,
	Grid,
	Select,
	MenuItem,
	Radio,
	RadioGroup,
	FormControl,
	FormGroup,
	FormControlLabel,
	Button,
	Tooltip,
	Checkbox,
	//useMediaQuery,
	//useTheme
} from '@material-ui/core/';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import {
	/* 	fade,
	ThemeProvider,
	withStyles,
 */ makeStyles,
	//	createMuiTheme
	useTheme,
} from '@material-ui/core/styles';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import SelectDialog from '../../SelectDialog';

import {
	convertDaysToString,
	convertStringToDays,
} from '../../../utils';

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
		marginTop: theme.spacing(4),
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
		marginTop: theme.spacing(2),
		alignSelf: 'flex-end',
		textAlign: 'right',
		//color: theme.palette.text.hint,
		color: (props) =>
			props.provisoryAddPunishment > 0
				? theme.palette.secondary.light
				: theme.palette.good.light,
		fontWeight: 'bold',
	},

	radioItemFavorable: {
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
}));

export default function SecondFase({ nextTab, fields }) {
	const {
		basePunishment,
		aggravatings,
		setAggravatings,
		mitigating,
		setMitigating,
		provisoryFractionManual,
		setProvisoryFractionManual,
		provisoryFractionManualSign,
		setProvisoryFractionManualSign,
		provisoryFractionManualNumerator,
		setProvisoryFractionManualNumerator,
		provisoryFractionManualDivider,
		setProvisoryFractionManualDivider,
		provisoryPunishment,
		setProvisoryPunishment,
		sumAggravating,
		setSumAggravating,
		sumMitigating,
		setSumMitigating,
		provisoryAddPunishment,
		punishmentTypeText,
		fineToo,
		fineBasePunishment,
		fineProvisoryAddPunishment, //setFineProvisoryAddPunishment,
		fineProvisoryPunishment, //setFineProvisoryPunishment
	} = fields;

	const classes = useStyles({provisoryAddPunishment});

	const [basePunishmentText, setBasePunishmentText] = useState('');

	const [provisoryPunishmentText, setProvisoryPunishmentText] = useState('');

	const [provisoryAddPunishmentText, setProvisoryAddPunishmentText] = useState(
		''
	);

	useEffect(() => {
		setBasePunishmentText(convertDaysToString(basePunishment));
	}, [basePunishment]);

	useEffect(() => {
		setProvisoryPunishmentText(convertDaysToString(provisoryPunishment));
	}, [provisoryPunishment]);

	useEffect(() => {
		setProvisoryAddPunishmentText(
			convertDaysToString(
				provisoryAddPunishment
				//provisoryAddPunishment > 0
			)
		);
	}, [provisoryAddPunishment]);

	return (
		<>
			<Typography className={classes.endLabel}>
				Pena base:{' '}
				<span className={classes.textColor}>{basePunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineBasePunishment, true)}`:''}</span>
			</Typography>

			<SelectDialog
				label='Agravantes'
				color='secondary'
				itemName='agravante'
				descriptionPlaceholder='Por ex: reincidência'
				defaultNumerator={1}
				defaultDivider={6}
				changeType='plus'
				field={aggravatings}
				setField={setAggravatings}
			/>
			<SelectDialog
				label='Atenuantes'
				color='good'
				itemName='atenuante'
				descriptionPlaceholder='Por ex: confissão'
				defaultNumerator={1}
				defaultDivider={6}
				changeType='minus'
				field={mitigating}
				setField={setMitigating}
			/>

			{/* <Typography span className={classes.sugestionLegend}>
			{provisoryAddPunishment !== 0 && 
				'Sugestão: acréscimo de 2/6 sobre a pena base'
			}
			{provisoryAddPunishment === 0 && ('Sugestão: sem alterações')}
			</Typography> */}
			{provisoryAddPunishment !== 0 && (
				<Typography span className={classes.calculatedPunishment}>
					{provisoryAddPunishment > 0 ? '+' : '-'} {provisoryAddPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineProvisoryAddPunishment, true)}`:''}
				</Typography>
			)}
			{/* <FormControlLabel
				className={classes.floatRight}
				//labelPlacement='start'
				control={<Checkbox name='manualInput' />}
				label='Inserir manualmente'
			/> */}

			<Typography span className={classes.endLabel}>
				Pena provisória:{' '}
				<span className={classes.textColor}>{provisoryPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineProvisoryPunishment, true)}`:''}</span>
			</Typography>
			<Button
				variant='contained'
				endIcon={<NavigateNextIcon />}
				className={classes.nextButton}
				onClick={() => nextTab()}
			>
				3a. Fase
			</Button>
		</>
	);
}
