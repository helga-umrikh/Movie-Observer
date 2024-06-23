import React from 'react'
import styles from './styles.module.scss'
import RangeSelect from '../RangeSelect/RangeSelect'
import { store } from '../../store/store'
import ChipSelect from '../ChipSelect/ChipSelect'
import { observer } from 'mobx-react-lite'

const ActionPanel = observer(() => {
    const year = new Date().getFullYear()
    const genresList = store.state.genresLabels
    return (
        <div className={styles.actionPanel}>
            <RangeSelect
                minValue={0}
                maxValue={10}
                valueType={'number'}
                filtersType="rating.imdb"
            />
            <RangeSelect
                minValue={1990}
                maxValue={year}
                valueType={'string'}
                filtersType="year"
            />
            <ChipSelect
                label="Жанры"
                list={genresList}
                filterType="genres.name"
            />
        </div>
    )
})

export default ActionPanel
