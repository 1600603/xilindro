import React, { useState, useEffect } from 'react';
//import { AppBar, Tabs, Tab, Typography, Box, Paper } from '@material-ui/core/';
//import useMediaQuery from '@material-ui/core/useMediaQuery';
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
	InputLabel,
	FormHelperText,
	Collapse,
	Switch,
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
		//flexDirection: 'row',
		//flexWrap: 'wrap',
		marginLeft: 0,
		boxSizing: 'border-box',
		[theme.breakpoints.down(692)]: {
			flexDirection: 'column-reverse',
			alignItems: 'flex-start',
		},
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
		//color: theme.palette.text.hint,
		color: (props) =>
			props.baseFractionCalculated > 0
				? theme.palette.secondary.light
				: theme.palette.good.light,
		fontWeight: 'bold',
	},
	radioItemFavorable: {
		//color: theme.palette.primary.main,
		color: theme.palette.good.light,
		textOverflow: 'elipsis',
	},
	radioItemNeutral: {
		color: theme.palette.grey[600],
		textOverflow: 'elipsis',
	},
	radioItemNotFavorable: {
		color: theme.palette.secondary.light,
		textOverflow: 'elipsis',
	},
	labelRadio: {
		//color: 'green',
		//marginTop: 50,
		[theme.breakpoints.down(692)]: {
			marginTop: theme.spacing(3),
			marginRight: 0,
			flex: 1,
		},
		marginRight: 32,
		flex: 1,
		//background:'red'
	},
	floatRight: {
		alignSelf: 'flex-end',
		marginRight: 0,
	},
	radioGroupContainer: {
		display: 'flex',
		flexDirection: 'row',

		//flexWrap: 'nowrap',
		//maxWidth: '100%',
		//backgroundColor: 'red',
	},
	labelTop: {
		margin: 0,
	},
	formControl: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
		maxWidth: 375,
	},
	manualAdd: {
		//marginTop: theme.spacing(4),
		marginBottom: theme.spacing(2),
	},
	fractionContainer: {
		marginTop: theme.spacing(0),
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
}));

export default function FirstFase({ nextTab, fields }) {
	const theme = useTheme();
	const minWidth = useMediaQuery('(min-width: 692px)');

	const numberList = [];

	for (let i = 0; i < 100; i++) numberList[i] = i + 1;

	const {
		baseCalcType,
		setBaseCalcType,
		minPunishment,
		minPunishmentUnity,
		startingPunishment,
		maxPunishment,
		maxPunishmentUnity,
		baseCulpability,
		setBaseCulpability,
		basePriorRecords,
		setBasePriorRecords,
		baseSocialConduct,
		setBaseSocialConduct,
		basePersonality,
		setBasePersonality,
		baseMotives,
		setBaseMotives,
		baseCircunstances,
		setBaseCircunstances,
		baseConsequences,
		setBaseConsequences,
		baseVictimBehavior,
		setBaseVictimBehavior,
		baseFractionManual,
		setBaseFractionManual,
		baseFractionManualSign,
		setBaseFractionManualSign,
		baseFractionManualNumerator,
		setBaseFractionManualNumerator,
		baseFractionManualDivider,
		setBaseFractionManualDivider,
		basePunishment,
		setBasePunishment,
		baseFractionCalculated,
		addPunishment,
		setAddPunishment,
		minPunishmentMonths,
		setMinPunishmentMonths,
		maxPunishmentMonths,
		setMaxPunishmentMonths,
		punishmentTypeText,
		fineToo,
		fineStartingPunishment,
		fineMinPunishment,
		fineMaxPunishment,
		fineAddPunishment,
		fineBasePunishment
	} = fields;

	const classes = useStyles({ baseFractionCalculated });

	/* '1. Culpabilidade',
				'2. Antecedentes',
				'3. Conduta social',
				'4. Personalidade do agente',
				'5. Motivos',
				'6. Circunst??ncias',
				'7. Consequ??ncias do crime',
				'8. Comportamento da v??tima', */
	const judicialCircunstances = [
		{
			id: 1,
			label: '1. Culpabilidade',
			field: baseCulpability,
			setField: setBaseCulpability,
		},
		{
			id: 2,
			label: '2. Antecedentes',
			field: basePriorRecords,
			setField: setBasePriorRecords,
		},
		{
			id: 3,
			label: '3. Conduta social',
			field: baseSocialConduct,
			setField: setBaseSocialConduct,
		},
		{
			id: 4,
			label: '4. Personalidade do agente',
			field: basePersonality,
			setField: setBasePersonality,
		},
		{
			id: 5,
			label: '5. Motivos',
			field: baseMotives,
			setField: setBaseMotives,
		},
		{
			id: 6,
			label: '6. Circunst??ncias',
			field: baseCircunstances,
			setField: setBaseCircunstances,
		},
		{
			id: 7,
			label: '7. Consequ??ncias do crime',
			field: baseConsequences,
			setField: setBaseConsequences,
		},
		{
			id: 8,
			label: '8. Comportamento da v??tima',
			field: baseVictimBehavior,
			setField: setBaseVictimBehavior,
		},
	];

	const minPunishmentText = convertDaysToString(
		convertStringToDays(minPunishment, minPunishmentUnity)
	);
	const startingPunishmentText = convertDaysToString(startingPunishment);
	const maxPunishmentText = convertDaysToString(
		convertStringToDays(maxPunishment, maxPunishmentUnity)
	);

	return (
		<>
			<Typography className={classes.endLabel}>
				Pena m??nima:{' '}
				<span className={classes.textColor}>{minPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineMinPunishment, true)}`:''}</span>
			</Typography>

			<Typography className={classes.topText}>
				Pena de partida:{' '}
				<span className={classes.textColor}>{startingPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineStartingPunishment, true)}`:''}</span>
			</Typography>
			<Typography className={classes.topText}>
				Pena m??xima:{' '}
				<span className={classes.textColor}>{maxPunishmentText}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineMaxPunishment, true)}`:''}</span>
			</Typography>

			<FormControl className={classes.formControl}>
				<InputLabel id='baseCalcType' shrink>
					Base de C??lculo
				</InputLabel>
				<Select
					native //={isSm}
					//value={numerator}
					//onChange={(e) => setNumerator(e.target.value)}
					inputProps={{
						name: 'baseCalcType',
						id: 'baseCalcType',
					}}
					value={baseCalcType}
					onChange={(e) => setBaseCalcType(e.target.value)}
				>
					<option value='minimum'>Pena m??nima</option>
					<option value='difference'>
						Diferen??a entre pena m??xima e pena de partida
					</option>
				</Select>
			</FormControl>
			<Typography variant='h6' gutterBottom className={classes.topic}>
				Circunst??ncias judiciais
			</Typography>

			{judicialCircunstances.map((judicialCircunstance) => (
				<FormControl key={judicialCircunstance.id} component='fieldset'>
					{/* <FormLabel component='legend'>Gender</FormLabel> */}
					<FormControlLabel
						label={judicialCircunstance.label}
						//labelPlacement='start'
						labelPlacement={minWidth ? 'start' : 'top'}
						control={
							<RadioGroup
								//aria-label='ponto de partida'
								name={`judicialCircunstance${judicialCircunstance.id}`}
								value={judicialCircunstance.field}
								onChange={(e) =>
									judicialCircunstance.setField(parseInt(e.target.value))
								}
							>
								<Grid container className={classes.radioGroupContainer}>
									<Grid item xs={12} sm>
										<FormControlLabel
											value={-1}
											control={<Radio />}
											label='Favor??vel'
											className={classes.radioItemFavorable}
										/>
									</Grid>
									<Grid item xs={12} sm>
										<FormControlLabel
											value={0}
											control={<Radio />}
											label='Neutra'
											className={classes.radioItemNeutral}
										/>
									</Grid>
									<Grid item xs={12} sm>
										<FormControlLabel
											value={1}
											control={<Radio />}
											label='Desfavor??vel'
											className={classes.radioItemNotFavorable}
										/>
									</Grid>
								</Grid>
							</RadioGroup>
						}
						//className={classes.selectControl}
						classes={{
							root: classes.selectControl,
							label: classes.labelRadio,
							labelPlacementTop: classes.labelTop,
						}}
					></FormControlLabel>
				</FormControl>
			))}

			<Collapse in={!baseFractionManual} className={classes.floatRight}>
				<Typography span className={classes.sugestionLegend}>
					{baseFractionCalculated !== 0 &&
						/* `Sugest??o: */ `${
							baseFractionCalculated > 0 ? 'acr??scimo' : 'decr??scimo'
						} de ${Math.abs(baseFractionCalculated * 8)}/8 ${
							baseCalcType === 'difference'
								? 'entre diferen??a da pena m??xima e ponto de partida'
								: 'sobre a pena m??nima'
						}`}
					{baseFractionCalculated === 0 && 'Sugest??o: nenhuma altera????o'}
				</Typography>

				<Typography span className={classes.calculatedPunishment}>
					{baseFractionCalculated === 0 && ''}
					{baseFractionCalculated !== 0 &&
						`${baseFractionCalculated > 0 ? '+' : '-'} ${convertDaysToString(
							Math.abs(addPunishment)
							//baseFractionCalculated > 0
						)}${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(Math.abs(fineAddPunishment), true)}`:''}`}
				</Typography>
			</Collapse>
			<FormControlLabel
				className={classes.floatRight}
				//labelPlacement='start'
				control={
					<Switch
						checked={baseFractionManual}
						onChange={(e) => setBaseFractionManual(e.target.checked)}
						name='manualInput'
					/>
				}
				label='Inserir manualmente'
			/>

			<Collapse in={baseFractionManual} className={classes.floatRight}>
				<FormGroup className={classes.manualAdd} id='fraction-container'>
					{/* <InputLabel disableAnimation>
					{changeType === 'plus' ? 'Acr??scimo' : 'Decr??scimo'}
				</InputLabel> */}
					<div className={classes.fractionContainer}>
						<Select
							native //={isSm}
							value={baseFractionManualSign}
							onChange={(e) =>
								setBaseFractionManualSign(parseInt(e.target.value))
							}
							inputProps={{
								name: 'baseFractionManualSign',
								id: 'baseFractionManualSign',
							}}
							aria-label='sinal do acr??scimo'
							className={classes.signField}
						>
							<option value={-1}>-</option>
							<option value={1}>+</option>
						</Select>
						<Select
							native //={isSm}
							value={baseFractionManualNumerator}
							onChange={(e) => setBaseFractionManualNumerator(e.target.value)}
							inputProps={{
								name: 'numerator',
								id: 'numerator',
							}}
							aria-label='numerador do acr??scimo'
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
							value={baseFractionManualDivider}
							onChange={(e) => setBaseFractionManualDivider(e.target.value)}
							inputProps={{
								name: 'divider',
								id: 'divider',
							}}
							aria-label='divisor do acr??scimo'
						>
							{numberList.map((n) => (
								<option key={n} value={n}>
									{n}
								</option>
							))}
						</Select>
					</div>
				</FormGroup>
				<Typography span className={classes.calculatedPunishment}>
					{baseFractionCalculated === 0 && ''}
					{baseFractionCalculated !== 0 &&
						`${baseFractionCalculated > 0 ? '+' : '-'} ${convertDaysToString(
							Math.abs(addPunishment)
							//baseFractionCalculated > 0
						)} ${fineToo?` de ${punishmentTypeText} e ${convertDaysToString(Math.abs(fineAddPunishment), true)}`:''}`}
				</Typography>
			</Collapse>

			<Typography span className={classes.endLabel}>
				Pena base:{' '}
				<span className={classes.textColor}>
					{convertDaysToString(basePunishment)}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineBasePunishment, true)}`:''}
				</span>
			</Typography>
			<Button
				variant='contained'
				endIcon={<NavigateNextIcon />}
				className={classes.nextButton}
				onClick={() => nextTab()}
			>
				2a. Fase
			</Button>
		</>
	);
}
