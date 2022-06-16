import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
// actionType: ['dataPassed'],
    setFields:['fields']
});

export const PunishmentTypes = Types;
export default Creators;

/* Initial State */

/* '1. Culpabilidade',
				'2. Antecedentes',
				'3. Conduta social',
				'4. Personalidade do agente',
				'5. Motivos',
				'6. Circunstâncias',
				'7. Consequências do crime',
				'8. Comportamento da vítima', */

export const INITIAL_STATE = Immutable({
// data: [],
    minPunishiment: 1,
    minPunishmentUnity: 'year',
    maxPunishment: 2,
    maxPunishmentUnity: 'year', //['day', 'month', 'year']
    startingPunishment: 'minimum', // ['minimum', 'medium']    
    baseCulpability: 0,
    basePriorRecords: 0,
    baseSocialConduct: 0,
    basePersonality: 0,
    baseMotives: 0,
    baseCircunstances: 0,
    baseConsequences: 0,
    baseVictimBehavior: 0,        
    baseFractionManual: false,
    baseFractionManualSign: 1, //-1 +1
    baseFractionManualNumerator: 1,
    baseFractionManualDivider: 8,
    basePunishment: undefined,
    aggravatings:[],//{description, numerator, divider}
    mitigating:[],
    provisoryFractionManual: false,
    provisoryFractionManualSign: 1,
    provisoryFractionManualNumerator: 1,
    provisoryFractionManualDivider: 3,
    provisoryPunishment: undefined,
    increases: [],
    decreases: [],
    finalFractionManual: false,
    finalFractionManualSign: 1,
    finalFractionManualNumerator: 1,
    finalFractionManualDivider: 3,
    finalPunishment: undefined,
    punishmentType: 'reclusao', //reclusao ou detencao
    generatedText: ''
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

export const setFields = (state, action) => ({
    ...state,
    ...action.fields
})




/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
// [Types.ACTION_TYPE]: reducer,
    [Types.SET_FIELDS]: setFields
});
