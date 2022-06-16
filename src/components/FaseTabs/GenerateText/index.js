import React, { useState, useEffect } from 'react';
//import { AppBar, Tabs, Tab, Typography, Box, Paper } from '@material-ui/core/';
// import { Container } from './styles';
import copy from 'copy-to-clipboard';

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
	Snackbar,
	IconButton
	//useMediaQuery,
	//useTheme
} from '@material-ui/core/';
//import MuiAlert from '@material-ui/lab/Alert';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import CloseIcon from '@material-ui/icons/Close';

import { convertDaysToString, convertStringToDays } from '../../../utils';

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
		marginBottom: theme.spacing(2),
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

const arrayToText = (items) => {
	console.log(items);
	if (items.length === 0) return 'nenhuma';
	let sentence = '';
	for (let i = 0; i < items.length; i++) {
		if (i > 0) {
			if (i === items.length - 1 && items.length > 1) sentence += ' e ';
			else sentence += ', ';
		}
		sentence += items[i];
	}

	return sentence;
};

const secondFaseToText = (items, typeSign = '+') => {
	console.log(items);
	if (items.length === 0) return 'nenhuma';
	let sentence = '';
	for (let i = 0; i < items.length; i++) {
		if (i > 0) {
			if (i === items.length - 1 && items.length > 1) sentence += ' e ';
			else sentence += ', ';
		}
		sentence += `${items[i].description} (${typeSign}${items[i].numerator}/${items[i].divider})`;
	}

	return sentence;
};

export default function ThirdFase({ fields }) {
	const classes = useStyles();
	const [showCopied, setShowCopied] = useState(false);
	const {
		minPunishmentDays,
		maxPunishmentDays,
		startingPunishment,
		startingPunishmentType,
		baseCulpability,
		basePriorRecords,
		baseSocialConduct,
		basePersonality,
		baseMotives,
		baseCircunstances,
		baseConsequences,
		baseVictimBehavior,
		baseCalcType,
		baseFractionCalculated,
		baseFractionManual,
		baseFractionManualSign,
		baseFractionManualNumerator,
		baseFractionManualDivider,
		addPunishment,
		basePunishment,
		aggravatings,
		mitigating,
		provisoryAddPunishment,
		provisoryPunishment,
		increases,
		decreases,
		addFinalPunishment,
		finalPunishment,
		hasContinuity,
		addContinuityFractionDivider,
		addContinuityFractionNumerator,
		continuityAddPunishment,
		hasFormalContest,
		addFormalContestFractionDivider,
		addFormalContestFractionNumerator,
		formalContestAddPunishment,
		definitivePunishment,
		punishmentType,
		generatedText,
		setGeneratedText,		
		fineToo,		
		fineMinPunishment, 
		fineMaxPunishment, 
		fineStartingPunishment,
		punishmentTypeText, 
		fineAddPunishment,
		fineBasePunishment,
		fineProvisoryAddPunishment, 
		fineProvisoryPunishment, 
		fineAddFinalPunishment, 
		fineFinalPunishment, 
		fineContinuityAddPunishment, 
		fineFormalContestAddPunishment, 
		fineDefinitivePunishment
	} = fields;

	const [definitivePunishmentText, setDefinitivePunishmentText] = useState('');

	useEffect(() => {
		setDefinitivePunishmentText(convertDaysToString(definitivePunishment));
	}, [definitivePunishment]);

	const judicialCircunstances = [
		{
			id: 1,
			label: 'culpabilidade',
			field: baseCulpability,
		},
		{
			id: 2,
			label: 'antecedentes',
			field: basePriorRecords,
		},
		{
			id: 3,
			label: 'conduta social',
			field: baseSocialConduct,
		},
		{
			id: 4,
			label: 'personalidade do agente',
			field: basePersonality,
		},
		{
			id: 5,
			label: 'motivos',
			field: baseMotives,
		},
		{
			id: 6,
			label: 'circunstâncias',
			field: baseCircunstances,
		},
		{
			id: 7,
			label: 'consequências do crime',
			field: baseConsequences,
		},
		{
			id: 8,
			label: 'comportamento da vítima',
			field: baseVictimBehavior,
		},
	];
	//${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineProvisoryPunishment, true)}`:''}
	useEffect(() => {
		const punishmentTypeText =
			punishmentType === 'reclusion' ? 'reclusão' : 'detenção';

		let favorableCircunstances = [];
		let neutralCircunstances = [];
		let notFavorableCircunstances = [];

		judicialCircunstances.map((circunstance) => {
			if (circunstance.field === 0)
				neutralCircunstances = [...neutralCircunstances, circunstance.label];
			if (circunstance.field === 1)
				notFavorableCircunstances = [
					...notFavorableCircunstances,
					circunstance.label,
				];
			if (circunstance.field === -1)
				favorableCircunstances = [
					...favorableCircunstances,
					circunstance.label,
				];
		});

		const favorableCircunstancesText = arrayToText(favorableCircunstances);
		const neutralCircunstancesText = arrayToText(neutralCircunstances);
		const notFavorableCircunstancesText = arrayToText(
			notFavorableCircunstances
		);

		const aggravatingsText = secondFaseToText(aggravatings);
		const mitigatingText = secondFaseToText(mitigating, '-');

		const increasesText = secondFaseToText(increases);
		const decreasesText = secondFaseToText(decreases, '-');

		setGeneratedText(`			
Pena mínima: ${convertDaysToString(minPunishmentDays)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineMinPunishment, true)}`:''}
Pena máxima: ${convertDaysToString(maxPunishmentDays)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineMaxPunishment, true)}`:''}

Pena de partida: ${convertDaysToString(
			startingPunishment
		)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineStartingPunishment, true)}`:''}

1a. fase
Circunstâncias favoráveis: ${favorableCircunstancesText}
Circunstâncias neutras:  ${neutralCircunstancesText}
Circunstâncias desfavoráveis:  ${notFavorableCircunstancesText}
Fração de acréscimo: ${
			baseFractionManual
				? `${baseFractionManualSign>0?'+':'-'} ${baseFractionManualNumerator}/${baseFractionManualDivider}`
				: `${baseFractionCalculated===0?`nenhuma`:`${baseFractionCalculated * 8}/8`}`
		}
Acréscimo: ${
			addPunishment < 0 ? '- ' : addPunishment > 0 ? '+ ' : ''
		}${Math.abs(addPunishment)>0?`${convertDaysToString(addPunishment)}${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineAddPunishment, true)}`:''}`:'nenhum'}
Pena base: ${convertDaysToString(basePunishment)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineBasePunishment, true)}`:''}

2a. fase
Agravantes: ${aggravatingsText}
Atenuantes: ${mitigatingText}
Acréscimo: ${
			provisoryAddPunishment < 0 ? '- ' : provisoryAddPunishment > 0 ? '+ ' : ''
		}${Math.abs(provisoryAddPunishment)>0?`${convertDaysToString(provisoryAddPunishment)}${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineProvisoryAddPunishment, true)}`:''}`:'nenhum'}
Pena provisória: ${convertDaysToString(
			provisoryPunishment
		)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineProvisoryPunishment, true)}`:''}

3a. fase
Causas de aumento: ${increasesText}
Causa de diminuição: ${decreasesText}
Acréscimo: ${
			addFinalPunishment < 0 ? '- ' : addFinalPunishment > 0 ? '+ ' : ''
		}${Math.abs(addFinalPunishment)>0?`${convertDaysToString(addFinalPunishment)}${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineAddFinalPunishment, true)}`:''}`:'nenhum'}
${hasContinuity || hasFormalContest?`Pena na terceira fase: ${convertDaysToString(finalPunishment)}${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineFinalPunishment, true)}`:''}\n`:'' }
${
	hasContinuity
		? `Acréscimo da continuidade delitiva (+${addContinuityFractionNumerator}/${addContinuityFractionDivider}): + ${convertDaysToString(
				continuityAddPunishment
		  )} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineContinuityAddPunishment, true)}`:''}`
		: ''
}
${
	hasFormalContest
		? `Acréscimo do concurso formal (+${addFormalContestFractionNumerator}/${addFormalContestFractionDivider}): + ${convertDaysToString(
				formalContestAddPunishment
		  )} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineFormalContestAddPunishment, true)}`:''}`
		: ''
}

Pena definitiva: ${convertDaysToString(
			definitivePunishment
		)} de ${punishmentTypeText}${fineToo?` e ${convertDaysToString(fineDefinitivePunishment, true)}`:''}
		`);
	}, []);

	return (
		<>
			<Typography className={classes.endLabel}>
				Pena definitiva:{' '}
				<span className={classes.textColor}>{definitivePunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineDefinitivePunishment, true)}`:''}</span>
			</Typography>

			<TextField
				id='outlined-multiline-static'
				//label='Multiline'
				multiline
				rows='20'
				//defaultValue='Default Value'
				value={generatedText}
				variant='outlined'
				fullWidth
				aria-label='texto gerado'
				InputProps={{
					readOnly: true,
				}}
			/>
			<Button
				variant='contained'
				startIcon={<FileCopyIcon />}
				className={classes.nextButton}
				//color="primary"
				onClick={() => {
					copy(generatedText);
					setShowCopied(true);
				}}
			>
				COPIAR TEXTO
			</Button>
			<Snackbar
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				open={showCopied}
				autoHideDuration={6000}
				onClose={() => setShowCopied(false)}
				message='Copiado'
				action={
					<>						
						<IconButton
							size='small'
							aria-label='close'
							color='inherit'
							onClick={() => setShowCopied(false)}
						>
							<CloseIcon fontSize='small' />
						</IconButton>
					</>
				}
			/>
		</>
	);
}
