import classes from "./MoviesFinderForm.module.css";
import years from "../data/years";

function MoviesFinderForm({
  onSubmit,
  onSearchParamChange,
  onSelectedYearsChange,
}) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.formGroup}>
        <label htmlFor="year">Lata: </label>
        <select name="year" id="year" onChange={onSelectedYearsChange}>
          {years.map((year) => (
            <option key={year.key} value={year.key}>
              {year.text}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="search">Tytuł: </label>
        <input
          id="search"
          type="text"
          onChange={onSearchParamChange}
          className={classes.searchInput}
        />
      </div>
      <div className={`${classes.formGroup} ${classes.center}`}>
        <button className={classes.searchButton} type="submit">
          Szukaj
        </button>
      </div>
    </form>
  );
}
export default MoviesFinderForm;
