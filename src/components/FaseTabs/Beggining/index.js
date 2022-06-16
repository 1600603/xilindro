import React from 'react';

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
	FormControlLabel,
	Button,
	Tooltip,
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
	containerPunishment: {},
}));

const FineFields = ({
	classes,
	fineStartingPunishment,
	fineMinPunishment,
	setFineMinPunishment,
	fineMaxPunishment,
	setFineMaxPunishment,	
}) => (
	<Grid container spacing={0} style={{ marginBottom: 40 }}>
		<Grid item xs={12} sm>
			<Grid
				item
				container
				spacing={0}
				style={{
					maxWidth: 200,
				}}
			>
				<Grid item xs>
					{/* <TextField placeholder='Pena mínima' /> */}
					<FormControl
						className={classes.formControl}
						fullWidth
						error={fineStartingPunishment === undefined}
					>
						<InputLabel id='minPunishment' shrink>
							Pena mínima (dias-multa)
						</InputLabel>
						<Select
							native //={isSm}
							//value={numerator}
							//onChange={(e) => setNumerator(e.target.value)}
							inputProps={{
								name: 'fineMinPunishment',
								id: 'fineMinPunishment',
							}}
							aria-label='pena mínima multa'
							value={fineMinPunishment}
							onChange={(e) => setFineMinPunishment(e.target.value)}
						>
							{[...Array(1500).keys()].map((num) => (
								<option value={num + 1}>{num + 1}</option>
							))}
						</Select>
						{fineStartingPunishment === undefined && (
							<FormHelperText>
								Pena mínima não pode ser maior do que a máxima
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
		</Grid>

		<Grid item xs={12} sm className={classes.containerPunishment}>
			<Grid
				item
				container
				spacing={0}
				style={{
					maxWidth: 200,
				}}
			>
				<Grid item xs>
					{/* <TextField placeholder='Pena mínima' /> */}
					<FormControl
						className={classes.formControl}
						fullWidth
						error={fineStartingPunishment === undefined}
					>
						<InputLabel id='fineMaxPunishment' shrink>
							Pena máxima (dias-multa)
						</InputLabel>
						<Select
							native //={isSm}
							//value={numerator}
							//onChange={(e) => setNumerator(e.target.value)}
							inputProps={{
								name: 'fineMaxPunishment',
								id: 'fineMaxPunishment',
							}}
							value={fineMaxPunishment}
							onChange={(e) => setFineMaxPunishment(e.target.value)}
						>
							{[...Array(4000).keys()].map((num) => (
								<option value={num + 1}>{num + 1}</option>
							))}
						</Select>
						{fineStartingPunishment === undefined && (
							<FormHelperText>
								Pena máxima não pode ser menor do que a mínima
							</FormHelperText>
						)}
					</FormControl>
				</Grid>
			</Grid>
		</Grid>
	</Grid>
);

export default function Beggining({ nextTab, fields }) {
	const {
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
	} = fields;

	const classes = useStyles();
	const theme = useTheme();
	const smUp = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<>
			<Typography variant='h6' gutterBottom className={classes.topic}>
				Penas
				{/* <Tooltip title={`
                    Preencha as penas mínimas
                    Exemplo:
                    Furto. Pena mínima 1 ano; Pena máxima 5 anos
                `}>					
					<EmojiObjects style={{ marginLeft: 16 }} />
				</Tooltip> */}
			</Typography>
			<Grid container spacing={0} style={{ marginBottom: 40 }}>
				<Grid item xs={12} sm>
					<Grid
						item
						container
						spacing={0}
						style={{
							maxWidth: 200,
						}}
					>
						<Grid item xs>
							{/* <TextField placeholder='Pena mínima' /> */}
							<FormControl
								className={classes.formControl}
								fullWidth
								error={startingPunishment === undefined}
							>
								<InputLabel id='minPunishment' shrink>
									Pena mínima
								</InputLabel>
								<Select
									native //={isSm}
									//value={numerator}
									//onChange={(e) => setNumerator(e.target.value)}
									inputProps={{
										name: 'minPunishment',
										id: 'minPunishment',
									}}
									aria-label='numerador do acréscimo'
									value={minPunishment}
									onChange={(e) => setMinPunishment(e.target.value)}
								>
									{[...Array(30).keys()].map((num) => (
										<option value={num + 1}>{num + 1}</option>
									))}
								</Select>
								{startingPunishment === undefined && (
									<FormHelperText>
										Pena mínima não pode ser maior do que a máxima
									</FormHelperText>
								)}
							</FormControl>
						</Grid>

						<Grid item xs>
							<FormControl
								className={classes.formControl}
								fullWidth
								error={startingPunishment === undefined}
							>
								<InputLabel shrink></InputLabel>

								<Select
									native //={isSm}
									//value={numerator}
									//onChange={(e) => setNumerator(e.target.value)}
									aria-label='unidade da pena mínima'
									//value='ano'
									/* inputProps={{
										name: 'minPunishment',
										id: 'minPunishment',
									}}		 */
									value={minPunishmentUnity}
									onChange={(e) => setMinPunishmentUnity(e.target.value)}
								>
									<option value='year'>anos</option>
									<option value='month'>meses</option>
									<option value='day'>dias</option>
								</Select>
							</FormControl>
							{/* <Select
								native
								aria-label='unidade da pena mínima'
								value='ano'
								
							>
								<option value='ano'>anos</option>
								<option value='mes'>meses</option>
								<option value='dia'>dias</option>
							</Select> */}
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12} sm className={classes.containerPunishment}>
					<Grid
						item
						container
						spacing={0}
						style={{
							maxWidth: 200,
						}}
					>
						<Grid item xs>
							{/* <TextField placeholder='Pena mínima' /> */}
							<FormControl
								className={classes.formControl}
								fullWidth
								error={startingPunishment === undefined}
							>
								<InputLabel id='maxPunishment' shrink>
									Pena máxima
								</InputLabel>
								<Select
									native //={isSm}
									//value={numerator}
									//onChange={(e) => setNumerator(e.target.value)}
									inputProps={{
										name: 'maxPunishment',
										id: 'maxPunishment',
									}}
									value={maxPunishment}
									onChange={(e) => setMaxPunishment(e.target.value)}
								>
									{[...Array(30).keys()].map((num) => (
										<option value={num + 1}>{num + 1}</option>
									))}
								</Select>
								{startingPunishment === undefined && (
									<FormHelperText>
										Pena máxima não pode ser menor do que a mínima
									</FormHelperText>
								)}
							</FormControl>
						</Grid>

						<Grid item xs>
							<FormControl
								className={classes.formControl}
								fullWidth
								error={startingPunishment === undefined}
							>
								<InputLabel shrink></InputLabel>

								<Select
									native //={isSm}
									//value={numerator}
									//onChange={(e) => setNumerator(e.target.value)}
									aria-label='unidade da pena máxima'
									//value='ano'
									/* inputProps={{
										name: 'minPunishment',
										id: 'minPunishment',
									}}		 */
									value={maxPunishmentUnity}
									onChange={(e) => setMaxPunishmentUnity(e.target.value)}
								>
									<option value='year'>anos</option>
									<option value='month'>meses</option>
									<option value='day'>dias</option>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<FormControlLabel
				className={classes.floatRight}
				//labelPlacement='start'
				control={
					<Switch
						checked={fineToo}
						onChange={(e) => setFineToo(e.target.checked)}
						name='fineTooINput'
					/>
				}
				label='Inserir pena de multa'
			/>
			<Collapse in={fineToo}>
				<FineFields
					classes={classes}
					fineStartingPunishment={fineStartingPunishment}
					fineMinPunishment={fineMinPunishment}
					setFineMinPunishment={setFineMinPunishment}
					fineMaxPunishment={fineMaxPunishment}
					setFineMaxPunishment={setFineMaxPunishment}
				/>
			</Collapse>

			<Typography variant='h6' gutterBottom className={classes.topic}>
				Tipo de pena
			</Typography>
			<FormControl component='fieldset' style={{ marginBottom: 40 }}>
				{/* <FormLabel component='legend'>Gender</FormLabel> */}
				<RadioGroup
					aria-label='tipo de pena'
					name='punishmentType'
					value={punishmentType}
					onChange={(e) => setPunishmentType(e.target.value)}
				>
					<Grid container>
						<Grid item>
							<FormControlLabel
								value='reclusion'
								control={<Radio />}
								label='Reclusão'
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								value='detention'
								control={<Radio />}
								label='Detenção'
							/>
						</Grid>
					</Grid>
				</RadioGroup>
			</FormControl>
			<Typography variant='h6' gutterBottom className={classes.topic}>
				Pena de partida
			</Typography>
			<FormControl component='fieldset' style={{ marginBottom: 40 }}>
				{/* <FormLabel component='legend'>Gender</FormLabel> */}
				<RadioGroup
					aria-label='ponto de partida'
					name='entry'
					value={startingPunishmentType}
					onChange={(e) => setStartingPunishmentType(e.target.value)}
				>
					<Grid container>
						<Grid item>
							<FormControlLabel
								value='minimum'
								control={<Radio />}
								label='Pena mínima'
							/>
						</Grid>
						<Grid item>
							<FormControlLabel
								value='medium'
								control={<Radio />}
								label='Pena média'
							/>
						</Grid>
					</Grid>
				</RadioGroup>
			</FormControl>
			<Typography span className={classes.endLabel}>
				Pena de partida:{' '}
				<span className={classes.textColor}>
					{convertDaysToString(startingPunishment)}{fineToo?` de ${punishmentTypeText} e ${convertDaysToString(fineStartingPunishment, true)}`:''}
				</span>
			</Typography>
			<Button
				variant='contained'
				endIcon={<NavigateNextIcon />}
				className={classes.nextButton}
				onClick={() => nextTab()}
				disabled={startingPunishment === undefined ||
					(fineToo && fineStartingPunishment === undefined)}
			>
				1a. Fase
			</Button>
		</>
	);
}
