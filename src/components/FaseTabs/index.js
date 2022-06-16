import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Tabs,
	Tab,
	Typography,
	Box,
	Paper,
	useMediaQuery,
} from '@material-ui/core/';
import Beggining from './Beggining';
import FirstFase from './FirstFase';
import SecondFase from './SecondFase';
import ThirdFase from './ThirdFase';
import GenerateText from './GenerateText';
import { convertDaysToString, convertStringToDays } from '../../utils';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component='div'
			role='tabpanel'
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					p={3}
					style={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
					}}
				>
					{children}
				</Box>
			)}
		</Typography>
	);
}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		'aria-controls': `scrollable-auto-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		//display: 'flex',
		backgroundColor: 'red',
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		minHeight: '100vh',
	},

	tabs: {
		//flexGrow: 1,
		display: 'flex',
		boxSizing: 'border-box',
		width: '100%',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	box: {
		//width:'100%',
		//boxSizing:'border-box',
		width: '100%',
		margin: 10,

		maxWidth: theme.breakpoints.values.sm,
		//margin: theme.spacing(1),
		//alignSelf: 'center',
		display: 'flex',
		flexDirection: 'column',
	},
}));

export default function FaseTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const minWidthCenteredTabs = useMediaQuery('(min-width: 840px)');
	/* const [tabIndex, setTabIndex] = useState(0); */
	//start fine
	const [fineToo, setFineToo] = useState(false);
	const [fineMinPunishment, setFineMinPunishment] = useState(10);
	const [fineMaxPunishment, setFineMaxPunishment] = useState(360);
	const [fineStartingPunishment, setFineStartingPunishment] = useState(
		undefined
	);

	const [punishmentTypeText, setPunishmentTypeText] = useState('reclusão');
	const [fineAddPunishment, setFineAddPunishment] = useState(0);
	const [fineBasePunishment, setFineBasePunishment] = useState(10);
	const [fineProvisoryAddPunishment, setFineProvisoryAddPunishment] = useState(0);
	const [fineProvisoryPunishment, setFineProvisoryPunishment] = useState(0);
	const [fineAddFinalPunishment, setFineAddFinalPunishment] = useState(0);
	const [fineFinalPunishment, setFineFinalPunishment] = useState(0);
	const [fineContinuityAddPunishment, setFineContinuityAddPunishment] = useState(0);
	const [fineFormalContestAddPunishment, setFineFormalContestAddPunishment] = useState(0);
	const [fineDefinitivePunishment, setFineDefinitivePunishment] = useState(0);
	
	

	//end fine
	const [minPunishment, setMinPunishment] = useState(1);
	const [minPunishmentUnity, setMinPunishmentUnity] = useState('year');
	const [maxPunishment, setMaxPunishment] = useState(2);
	const [maxPunishmentUnity, setMaxPunishmentUnity] = useState('year'); //['day', 'month', 'year']
	const [startingPunishmentType, setStartingPunishmentType] = useState(
		'minimum'
	); // ['minimum', 'medium']
	const [startingPunishment, setStartingPunishment] = useState(undefined); // ['minimum', 'medium']
	const [baseCalcType, setBaseCalcType] = useState('difference'); //['minimum', 'difference']
	const [baseCulpability, setBaseCulpability] = useState(0);
	const [basePriorRecords, setBasePriorRecords] = useState(0);
	const [baseSocialConduct, setBaseSocialConduct] = useState(0);
	const [basePersonality, setBasePersonality] = useState(0);
	const [baseMotives, setBaseMotives] = useState(0);
	const [baseCircunstances, setBaseCircunstances] = useState(0);
	const [baseConsequences, setBaseConsequences] = useState(0);
	const [baseVictimBehavior, setBaseVictimBehavior] = useState(0);
	const [baseFractionCalculated, setBaseFractionCalculated] = useState(0);
	const [baseFractionManual, setBaseFractionManual] = useState(false);
	const [baseFractionManualSign, setBaseFractionManualSign] = useState(1); //-1 +1
	const [
		baseFractionManualNumerator,
		setBaseFractionManualNumerator,
	] = useState(1);
	const [baseFractionManualDivider, setBaseFractionManualDivider] = useState(8);
	const [basePunishment, setBasePunishment] = useState(undefined);
	const [aggravatings, setAggravatings] = useState([]); //{description, numerator, divider}
	const [mitigating, setMitigating] = useState([]);
	const [provisoryFractionManual, setProvisoryFractionManual] = useState(false);
	const [
		provisoryFractionManualSign,
		setProvisoryFractionManualSign,
	] = useState(1);
	const [
		provisoryFractionManualNumerator,
		setProvisoryFractionManualNumerator,
	] = useState(1);
	const [
		provisoryFractionManualDivider,
		setProvisoryFractionManualDivider,
	] = useState(3);
	const [provisoryPunishment, setProvisoryPunishment] = useState(undefined);
	const [increases, setIncreases] = useState([]);
	const [decreases, setDecreases] = useState([]);
	const [finalFractionManual, setFinalFractionManual] = useState(false);
	const [finalFractionManualSign, setFinalFractionManualSign] = useState(1);
	const [
		finalFractionManualNumerator,
		setFinalFractionManualNumerator,
	] = useState(1);
	const [finalFractionManualDivider, setFinalFractionManualDivider] = useState(
		3
	);
	const [finalPunishment, setFinalPunishment] = useState(undefined);
	const [hasContinuity, setHasContinuity] = useState(false);
	const [
		addContinuityFractionNumerator,
		setAddContinuityFractionNumerator,
	] = useState(1);
	const [
		addContinuityFractionDivider,
		setAddContinuityFractionDivider,
	] = useState(6);
	const [continuityAddPunishment, setContinuityAddPunishment] = useState(0);
	const [hasFormalContest, setHasFormalContest] = useState(false);
	const [
		addFormalContestFractionNumerator,
		setAddFormalContestFractionNumerator,
	] = useState(1);
	const [
		addFormalContestFractionDivider,
		setAddFormalContestFractionDivider,
	] = useState(6);
	const [formalContestAddPunishment, setFormalContestAddPunishment] = useState(
		0
	);
	const [definitivePunishment, setDefinitivePunishment] = useState(0);
	const [punishmentType, setPunishmentType] = useState('reclusion'); //reclusion ou detention
	const [generatedText, setGeneratedText] = useState('');


	useEffect(() => {
		setPunishmentTypeText(punishmentType==='reclusion'?'reclusão':'detenção')
	},[punishmentType])

	//continuity

	useEffect(() => {
		setContinuityAddPunishment(
			Math.floor(
				finalPunishment *
					(addContinuityFractionNumerator / addContinuityFractionDivider)
			)
		);
	}, [
		finalPunishment,
		addContinuityFractionNumerator,
		addContinuityFractionDivider,
	]);

	useEffect(() => {
		setFineContinuityAddPunishment(
			Math.floor(
				fineFinalPunishment *
					(addContinuityFractionNumerator / addContinuityFractionDivider)
			)
		);
	}, [
		fineFinalPunishment,
		addContinuityFractionNumerator,
		addContinuityFractionDivider,
	]);

	

	//formal contest

	useEffect(() => {
		setFormalContestAddPunishment(
			Math.floor(
				finalPunishment *
					(addFormalContestFractionNumerator / addFormalContestFractionDivider)
			)
		);
	}, [
		finalPunishment,
		addFormalContestFractionNumerator,
		addFormalContestFractionDivider,
	]);

	useEffect(() => {
		setFineFormalContestAddPunishment(
			Math.floor(
				fineFinalPunishment *
					(addFormalContestFractionNumerator / addFormalContestFractionDivider)
			)
		);
	}, [
		fineFinalPunishment,
		addFormalContestFractionNumerator,
		addFormalContestFractionDivider,
	]);

	// definitive punishemnt

	useEffect(() => {
		setDefinitivePunishment(
			finalPunishment +
				(hasContinuity ? continuityAddPunishment : 0) +
				(hasFormalContest ? formalContestAddPunishment : 0)
		);
	}, [
		finalPunishment,
		hasContinuity,
		continuityAddPunishment,
		hasFormalContest,
		formalContestAddPunishment,
	]);

	useEffect(() => {
		setFineDefinitivePunishment(
			fineFinalPunishment +
				(hasContinuity ? fineContinuityAddPunishment : 0) +
				(hasFormalContest ? fineFormalContestAddPunishment : 0)
		);
	}, [
		fineFinalPunishment,
		hasContinuity,
		fineContinuityAddPunishment,
		hasFormalContest,
		fineFormalContestAddPunishment,
	]);


	//others

	const [addPunishment, setAddPunishment] = useState(0);
	const [minPunishmentDays, setMinPunishmentDays] = useState(0);
	const [maxPunishmentDays, setMaxPunishmentDays] = useState(0);
	const [sumAggravating, setSumAggravating] = useState(0);
	const [sumMitigating, setSumMitigating] = useState(0);
	const [provisoryAddPunishment, setProvisoryAddPunishment] = useState(0);
	const [sumIncreases, setSumIncreases] = useState(0);
	const [sumDecreases, setSumDecreases] = useState(0);
	const [addFinalPunishment, setAddFinalPunishment] = useState(0);

	useEffect(() => {
		let _minPunishment =
			typeof minPunishment !== 'number'
				? parseInt(minPunishment)
				: minPunishment;
		let _maxPunishment =
			typeof maxPunishment !== 'number'
				? parseInt(maxPunishment)
				: maxPunishment;
		let _min = convertStringToDays(_minPunishment, minPunishmentUnity);
		let _max = convertStringToDays(_maxPunishment, maxPunishmentUnity);
		if (_min > _max) {
			setStartingPunishment(undefined);
			return;
		}
		if (startingPunishmentType === 'minimum') {
			setStartingPunishment(_min);
			return;
		}

		let _middle = Math.floor((_min + _max) / 2);

		setStartingPunishment(_middle);
	}, [
		minPunishment,
		minPunishmentUnity,
		maxPunishment,
		maxPunishmentUnity,
		startingPunishmentType,
	]);

	useEffect(() => {
		let _fineMinPunishment =
			typeof fineMinPunishment !== 'number'
				? parseInt(fineMinPunishment)
				: fineMinPunishment;
		let _fineMaxPunishment =
			typeof fineMaxPunishment !== 'number'
				? parseInt(fineMaxPunishment)
				: fineMaxPunishment;
		if (_fineMinPunishment > _fineMaxPunishment) {
			setFineStartingPunishment(undefined);
			return;
		}
		setFineStartingPunishment(
			startingPunishmentType === 'minimum'
				? _fineMinPunishment
				: Math.floor((_fineMinPunishment + _fineMaxPunishment) / 2)
		);
	}, [fineMinPunishment, fineMaxPunishment, startingPunishmentType]);

	useEffect(() => {
		if (baseFractionManual) {
			setBaseFractionCalculated(
				(baseFractionManualNumerator / baseFractionManualDivider) *
					baseFractionManualSign
			);
		} else {
			if (startingPunishmentType === 'medium') {
				setBaseFractionCalculated(
					(baseCulpability +
						basePriorRecords +
						baseSocialConduct +
						basePersonality +
						baseMotives +
						baseCircunstances +
						baseConsequences +
						baseVictimBehavior) /
						8
				);
			} else {
				let _sum =
					(baseCulpability > 0 ? baseCulpability : 0) +
					(basePriorRecords > 0 ? basePriorRecords : 0) +
					(baseSocialConduct > 0 ? baseSocialConduct : 0) +
					(basePersonality > 0 ? basePersonality : 0) +
					(baseMotives > 0 ? baseMotives : 0) +
					(baseCircunstances > 0 ? baseCircunstances : 0) +
					(baseConsequences > 0 ? baseConsequences : 0) +
					(baseVictimBehavior > 0 ? baseVictimBehavior : 0);
				setBaseFractionCalculated(_sum / 8);
			}
		}
	}, [
		startingPunishmentType,
		baseCulpability,
		basePriorRecords,
		baseSocialConduct,
		basePersonality,
		baseMotives,
		baseCircunstances,
		baseConsequences,
		baseVictimBehavior,
		baseFractionManual,
		baseFractionManualSign,
		baseFractionManualDivider,
		baseFractionManualNumerator,
	]);

	useEffect(() => {
		setMinPunishmentDays(
			convertStringToDays(minPunishment, minPunishmentUnity)
		);
		setMaxPunishmentDays(
			convertStringToDays(maxPunishment, maxPunishmentUnity)
		);
	}, [minPunishment, minPunishmentUnity, maxPunishment, maxPunishmentUnity]);

	useEffect(() => {
		let _calc;
		if (baseCalcType === 'difference') {
			_calc = (maxPunishmentDays - startingPunishment) * baseFractionCalculated;
		} else {
			_calc = minPunishmentDays * baseFractionCalculated;
		}

		_calc = _calc > 0 ? Math.floor(_calc) : Math.ceil(_calc);

		setAddPunishment(_calc);
	}, [
		baseFractionCalculated,
		maxPunishmentDays,
		startingPunishment,
		minPunishmentDays,
		baseCalcType,
		//baseFractionManual,
	]);

	useEffect(() => {
		let _calc;
	
		let _fineMinPunishment =
			typeof fineMinPunishment !== 'number'
				? parseInt(fineMinPunishment)
				: fineMinPunishment;
		let _fineMaxPunishment =
			typeof fineMaxPunishment !== 'number'
				? parseInt(fineMaxPunishment)
				: fineMaxPunishment;
		if (baseCalcType === 'difference') {
			_calc = (_fineMaxPunishment - fineStartingPunishment) * baseFractionCalculated;
		} else {
			_calc = _fineMinPunishment * baseFractionCalculated;
		}

		_calc = _calc > 0 ? Math.floor(_calc) : Math.ceil(_calc);

		setFineAddPunishment(_calc);
	}, [
		baseFractionCalculated,
		fineMaxPunishment,
		fineStartingPunishment,
		fineMinPunishment,
		baseCalcType,
		//baseFractionManual,
	]);

	useEffect(() => {
		let _calc = startingPunishment + addPunishment;
		_calc = _calc < minPunishmentDays ? minPunishmentDays : _calc;
		_calc = _calc > maxPunishmentDays ? maxPunishmentDays : _calc;

		setBasePunishment(_calc);
	}, [startingPunishment, addPunishment, minPunishmentDays, maxPunishmentDays]);

	useEffect(() => {
		let _fineMinPunishment =
			typeof fineMinPunishment !== 'number'
				? parseInt(fineMinPunishment)
				: fineMinPunishment;
		let _fineMaxPunishment =
			typeof fineMaxPunishment !== 'number'
				? parseInt(fineMaxPunishment)
				: fineMaxPunishment;
		let _calc = fineStartingPunishment + fineAddPunishment;
		_calc = _calc < _fineMinPunishment ? _fineMinPunishment : _calc;
		_calc = _calc > _fineMaxPunishment ? _fineMaxPunishment : _calc;

		setFineBasePunishment(_calc);
	}, [fineStartingPunishment, fineAddPunishment, fineMinPunishment, fineMaxPunishment]);

	useEffect(() => {
		let sum = 0;
		aggravatings.map((e) => (sum += e.numerator / e.divider));
		setSumAggravating(sum);
	}, [aggravatings]);

	useEffect(() => {
		let sum = 0;
		mitigating.map((e) => (sum += e.numerator / e.divider));
		setSumMitigating(sum);
	}, [mitigating]);

	useEffect(() => {
		//let calc = (sumAggravating - sumMitigating + 1) * basePunishment;
		let calc = basePunishment + provisoryAddPunishment;
		setProvisoryPunishment(calc);
	}, [provisoryAddPunishment, basePunishment]);

	useEffect(() => {
		//let calc = (sumAggravating - sumMitigating + 1) * basePunishment;
		let calc = fineBasePunishment + fineProvisoryAddPunishment;
		setFineProvisoryPunishment(calc);
	}, [fineProvisoryAddPunishment, fineBasePunishment]);


	useEffect(() => {
		let _calc = basePunishment * (sumAggravating - sumMitigating);
		_calc = _calc > 0 ? Math.floor(_calc) : Math.ceil(_calc);
		setProvisoryAddPunishment(_calc);
	}, [sumAggravating, sumMitigating, basePunishment]);

	useEffect(() => {
		let _calc = fineBasePunishment * (sumAggravating - sumMitigating);
		_calc = _calc > 0 ? Math.floor(_calc) : Math.ceil(_calc);
		setFineProvisoryAddPunishment(_calc);
	}, [sumAggravating, sumMitigating, fineBasePunishment]);

	useEffect(() => {
		let sum = 0;
		increases.map((e) => (sum += e.numerator / e.divider));
		setSumIncreases(sum);
		//console.log('changed aggrav');
	}, [increases]);

	useEffect(() => {
		let sum = 0;
		decreases.map((e) => (sum += e.numerator / e.divider));
		setSumDecreases(sum);
	}, [decreases]);

	useEffect(() => {
		let add =
			provisoryPunishment * (1 + sumIncreases) * (1 - sumDecreases) -
			provisoryPunishment;

		add = add > 0 ? Math.floor(add) : Math.ceil(add);

		setAddFinalPunishment(add);
	}, [provisoryPunishment, sumIncreases, sumDecreases]);

	useEffect(() => {
		let add =
			fineProvisoryPunishment * (1 + sumIncreases) * (1 - sumDecreases) -
			fineProvisoryPunishment;

		add = add > 0 ? Math.floor(add) : Math.ceil(add);

		setFineAddFinalPunishment(add);
	}, [fineProvisoryPunishment, sumIncreases, sumDecreases]);

	useEffect(() => {
		setFinalPunishment(provisoryPunishment + addFinalPunishment);
	}, [provisoryPunishment, addFinalPunishment]);

	useEffect(() => {
		setFineFinalPunishment(fineProvisoryPunishment + fineAddFinalPunishment);
	}, [fineProvisoryPunishment, fineAddFinalPunishment]);

	const begginingFaseFields = {
		minPunishment,
		setMinPunishment,
		minPunishmentUnity,
		setMinPunishmentUnity,
		maxPunishment,
		setMaxPunishment,
		maxPunishmentUnity,
		setMaxPunishmentUnity,
		startingPunishmentType,
		setStartingPunishmentType,
		startingPunishment,
		setStartingPunishment,
		punishmentType,
		setPunishmentType,
		fineToo,
		setFineToo,
		fineStartingPunishment,
		fineMinPunishment,
		setFineMinPunishment,
		fineMaxPunishment,
		setFineMaxPunishment,
		punishmentTypeText
	};

	const firstFaseFields = {
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
		baseFractionCalculated,
		setBaseFractionCalculated,
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
		addPunishment,
		setAddPunishment,
		/* minPunishmentMonths: minPunishmentDays,
		setMinPunishmentMonths: setMinPunishmentDays,
		maxPunishmentMonths: maxPunishmentDays,
		setMaxPunishmentMonths: setMaxPunishmentDays, */
		minPunishmentDays,
		setMinPunishmentDays,
		maxPunishmentDays,
		setMaxPunishmentDays,
		punishmentTypeText,
		fineToo,
		fineStartingPunishment,
		fineMinPunishment,
		fineMaxPunishment,
		fineAddPunishment,
		fineBasePunishment
		
	};

	const secondFaseFields = {
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
	};

	const thirdFaseFields = {
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
		setAddFinalPunishment,
		sumIncreases,
		setSumIncreases,
		sumDecreases,
		setSumDecreases,
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
		
	};

	const generateTextFields = {
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
		generatedText,
		setGeneratedText,
		punishmentType,
		setPunishmentType,
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
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const nextTab = (tabIndex) => {
		console.log('up!');

		setValue(tabIndex ? tabIndex : value + 1);
		window.scrollTo({
			top: 0,
			//behavior: 'smooth',
		});
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='default'>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor='primary'
					textColor='primary'
					variant='scrollable'
					scrollButtons='auto'
					aria-label='abas das fases'
					variant={minWidthCenteredTabs ? 'fullWidth' : 'scrollable'}
					centered={minWidthCenteredTabs}
				>
					<Tab label='Início' {...a11yProps(0)} />
					<Tab
						label='1a. Fase'
						{...a11yProps(1)}
						disabled={
							startingPunishment === undefined ||
							(fineToo && fineStartingPunishment === undefined)
						}
					/>
					<Tab
						label='2a. Fase'
						{...a11yProps(2)}
						disabled={
							startingPunishment === undefined ||
							(fineToo && fineStartingPunishment === undefined)
						}
					/>
					<Tab
						label='3a. Fase'
						{...a11yProps(3)}
						disabled={
							startingPunishment === undefined ||
							(fineToo && fineStartingPunishment === undefined)
						}
					/>
					<Tab
						label='Gerar Texto'
						{...a11yProps(4)}
						disabled={
							startingPunishment === undefined ||
							(fineToo && fineStartingPunishment === undefined)
						}
					/>
					{/*  <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0} className={classes.tabs}>
				<div className={classes.box}>
					<Beggining nextTab={nextTab} fields={begginingFaseFields} />
				</div>
			</TabPanel>
			<TabPanel value={value} index={1} className={classes.tabs}>
				<div className={classes.box}>
					<FirstFase nextTab={nextTab} fields={firstFaseFields} />
				</div>
			</TabPanel>
			<TabPanel value={value} index={2} className={classes.tabs}>
				<div className={classes.box}>
					<SecondFase nextTab={nextTab} fields={secondFaseFields} />
				</div>
			</TabPanel>
			<TabPanel value={value} index={3} className={classes.tabs}>
				<div className={classes.box}>
					<ThirdFase nextTab={nextTab} fields={thirdFaseFields} />
				</div>
			</TabPanel>
			<TabPanel value={value} index={4} className={classes.tabs}>
				<div className={classes.box}>
					<GenerateText changeTab={nextTab} fields={generateTextFields} />
				</div>
			</TabPanel>
		</div>
	);
}
