import { Query } from '../index';

const findCategories = () => Query<{}[]>("SELECT * FROM Categories");

export default {
  findCategories
}
