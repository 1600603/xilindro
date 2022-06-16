import React, { useState, useEffect } from 'react';
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
	Collapse,
	Switch,
	//useMediaQuery,
	//useTheme
} from '@material-ui/core/';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import SelectDialog from '../../SelectDialog';

import { convertDaysToString, convertStringToDays } from '../../../utils';

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
			props.addFinalPunishment > 0
				? theme.palette.secondary.light
				: theme.palette.good.light,
		fontWeight: 'bold',
	},

	plusPunishment: {
		marginTop: theme.spacing(2),
		alignSelf: 'flex-end',
		textAlign: 'right',
		//color: theme.palette.text.hint,
		color: theme.palette.secondary.light,
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
	fractionContainer: {
		//marginTop: theme.spacing(2),
		display: 'flex',
		flexDirection: 'row',
		//minWidth: theme.spacing(5),

		alignItems: 'center',
		alignSelf: 'flex-end',
		flexWrap: 'nowrap',
	},
	slashBar: {
		fontSize: '2em',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		//fontWeight: 'bold'
	},
	signField: {
		marginRight: theme.spacing(1),
	},
	forthFaseField: {
		marginTop: theme.spacing(2),
		alignSelf: 'flex-end',
		marginRight: 0,
	},
}));

export default function ThirdFase({ nextTab, fields }) {
	const {
		provisoryPunishment,
		increases,
		setIncreases,
		decreases,
		setDecreases,
		finalFractionManual,
		setFinalFractionManual,
		finalFractionManualSign,
		setFinalFractionManualSign,
		finalFractionManualNumerator,
		setFinalFractionManualNumerator,
		finalFractionManualDivider,
		setFinalFractionManualDivider,
		finalPunishment,
		setFinalPunishment,
		addFinalPunishment,
		hasContinuity,
		setHasContinuity,
		addContinuityFractionNumerator,
		setAddContinuityFractionNumerator,
		addContinuityFractionDivider,
		setAddContinuityFractionDivider,
		continuityAddPunishment,
		setContinuityAddPunishment,
		hasFormalContest,
		setHasFormalContest,
		addFormalContestFractionNumerator,
		setAddFormalContestFractionNumerator,
		addFormalContestFractionDivider,
		setAddFormalContestFractionDivider,
		formalContestAddPunishment,
		setFormalContestAddPunishment,
		definitivePunishment,
		setDefinitivePunishment,
		punishmentTypeText,
		fineToo,
		fineProvisoryPunishment,
		fineAddFinalPunishment, 
		fineFinalPunishment,
		fineContinuityAddPunishment, 
		fineFormalContestAddPunishment, 
		fineDefinitivePunishment
	} = fields;

	const [provisoryPunishmentText, setProvisoryPunishmentText] = useState('');
	const [addFinalPunishmentText, setAddFinalPunishmentText] = useState('');
	const [finalPunishmentText, setFinalPunishmentText] = useState('');
	const [definitivePunishmentText, setDefinitivePunishmentText] = useState('');
	const [
		continuityAddPunishmentText,
		setContinuityAddPunishmentText,
	] = useState('');
	const [
		formalContestAddPunishmentText,
		setFormalContestAddPunishmentText,
	] = useState('');

	const numberList = [];

	for (let i = 0; i < 100; i++) numberList[i] = i + 1;

	useEffect(() => {
		setProvisoryPunishmentText(convertDaysToString(provisoryPunishment));
	}, [provisoryPunishment]);

	useEffect(() => {
		setAddFinalPunishmentText(convertDaysToString(addFinalPunishment));
	}, [addFinalPunishment]);

	useEffect(() => {
		setFinalPunishmentText(convertDaysToString(finalPunishment));
	}, [finalPunishment]);

	useEffect(() => {
		setDefinitivePunishmentText(convertDaysToString(definitivePunishment));
	}, [definitivePunishment]);

	useEffect(() => {
		setContinuityAddPunishmentText(
			convertDaysToString(continuityAddPunishment)
		);
	}, [continuityAddPunishment]);

	useEffect(() => {
		setFormalContestAddPunishmentText(
			convertDaysToString(formalContestAddPunishment)
		);
	}, [formalContestAddPunishment]);

	const classes = useStyles({ addFinalPunishment });

	return (
		<>
			<Typography className={classes.endLabel}>
				Pena provisória:{' '}
				<span className={classes.textColor}>{provisoryPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineProvisoryPunishment, true)}`:''}</span>
			</Typography>

			<SelectDialog
				label='Causas de aumento'
				color='secondary'
				itemName='causa de aumento'
				descriptionPlaceholder=''
				defaultNumerator={1}
				defaultDivider={3}
				changeType='plus'
				field={increases}
				setField={setIncreases}
			/>
			<SelectDialog
				label='Causas de diminuição'
				color='good'
				itemName='causa de diminuição'
				descriptionPlaceholder=''
				defaultNumerator={1}
				defaultDivider={3}
				changeType='minus'
				field={decreases}
				setField={setDecreases}
			/>

			{/* <Typography span className={classes.sugestionLegend}>
				{addFinalPunishment === 0 && 'Sugestão: sem alterações'}
				{addFinalPunishment !== 0 &&
					`Sugestão: ${
						addFinalPunishment > 0 ? 'acréscimo' : 'decréscimo'
					} de x/x sobre a pena provisória`}
			</Typography> */}
			{addFinalPunishment !== 0 && (
				<Typography span className={classes.calculatedPunishment}>
					{addFinalPunishment > 0 ? '+' : '-'} {addFinalPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineAddFinalPunishment, true)}`:''}
				</Typography>
			)}
			{/* <FormControlLabel
				className={classes.floatRight}
				//labelPlacement='start'
				control={<Checkbox name='manualInput' />}
				label='Inserir manualmente'
			/> */}
			
			<FormControlLabel
				control={
					<Switch
						checked={hasContinuity}
						onChange={(e) => setHasContinuity(e.target.checked)}
						
					/>
				}
				label='Crime continuado'
				labelPlacement="start"
				className={classes.forthFaseField}
			/>
			<Collapse in={hasContinuity} className={classes.floatRight}>
				<FormGroup className={classes.manualAdd} id='fraction-container'>
					{/* <InputLabel disableAnimation>
					{changeType === 'plus' ? 'Acréscimo' : 'Decréscimo'}
				</InputLabel> */}
					<div className={classes.fractionContainer}>
						<Typography className={classes.signField}>+</Typography>
						<Select
							native //={isSm}
							value={addContinuityFractionNumerator}
							onChange={(e) =>
								setAddContinuityFractionNumerator(e.target.value)
							}
							inputProps={{
								name: 'numerator',
								id: 'numerator',
							}}
							aria-label='numerador do acréscimo da continuidade'
						>
							{numberList.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</Select>
						<div className={classes.slashBar}>/</div>
						<Select
							native //={isSm}
							value={addContinuityFractionDivider}
							onChange={(e) => setAddContinuityFractionDivider(e.target.value)}
							inputProps={{
								name: 'divider',
								id: 'divider',
							}}
							aria-label='divisor do acréscimo da continuidade'
						>
							{numberList.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</Select>
					</div>
				</FormGroup>
				<Typography span className={classes.plusPunishment}>
					+ {continuityAddPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineContinuityAddPunishment, true)}`:''}
				</Typography>
			</Collapse>

			<FormControlLabel
				control={
					<Switch
						checked={hasFormalContest}
						onChange={(e) => setHasFormalContest(e.target.checked)}
					/>
				}
				label='Concurso formal'
				labelPlacement="start"
				className={classes.forthFaseField}
			/>
			<Collapse in={hasFormalContest} className={classes.floatRight}>
				<FormGroup className={classes.manualAdd} id='fraction-container'>
					{/* <InputLabel disableAnimation>
					{changeType === 'plus' ? 'Acréscimo' : 'Decréscimo'}
				</InputLabel> */}
					<div className={classes.fractionContainer}>
						<Typography className={classes.signField}>+</Typography>
						<Select
							native //={isSm}
							value={addFormalContestFractionNumerator}
							onChange={(e) =>
								setAddFormalContestFractionNumerator(e.target.value)
							}
							inputProps={{
								name: 'numerator_formalcontest',
								id: 'numerator_formalcontest',
							}}
							aria-label='numerador do acréscimo do concurso formal'
						>
							{numberList.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</Select>
						<div className={classes.slashBar}>/</div>
						<Select
							native //={isSm}
							value={addFormalContestFractionDivider}
							onChange={(e) => setAddFormalContestFractionDivider(e.target.value)}
							inputProps={{
								name: 'divider_formalcontest',
								id: 'divider_formalcontest',
							}}
							aria-label='divisor do acréscimo do concurso formal'
						>
							{numberList.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</Select>
					</div>
				</FormGroup>
				<Typography span className={classes.plusPunishment}>
					+ {formalContestAddPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineFormalContestAddPunishment, true)}`:''}
				</Typography>
			</Collapse>


			<Typography span className={classes.endLabel}>
				Pena definitiva:{' '}
				<span className={classes.textColor}>{definitivePunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineDefinitivePunishment, true)}`:''}</span>
			</Typography>
			<Button
				variant='contained'
				endIcon={<NavigateNextIcon />}
				className={classes.nextButton}
				onClick={() => nextTab()}
			>
				Gerar texto
			</Button>
		</>
	);
}
