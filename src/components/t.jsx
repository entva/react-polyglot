import { useT } from '../hooks';
import smartT from '../smart_t';

const T = ({ id, ...options }) => smartT(useT(), id, options) || null;

export default T;
