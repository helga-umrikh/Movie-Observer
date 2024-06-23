import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import { Button, FormControl, Input, InputLabel } from '@mui/material'
import { store } from '../../store/store'
import { observer } from 'mobx-react-lite'
import { FiltersType } from '../../interfaces/IMoviesState'

interface RangeSelectProps {
    minValue: number
    maxValue: number
    valueType: string
    filtersType: keyof FiltersType
}

const RangeSelect: FC<RangeSelectProps> = observer(
    ({ minValue, maxValue, filtersType, valueType }) => {
        const [startValue, setStartValue] = useState<number>(minValue)
        const [endValue, setEndValue] = useState<number>(maxValue)

        return (
            <div className={styles.rangeSelect}>
                <FormControl
                    variant="standard"
                    className={styles.rangeSelect__inputContainer}
                >
                    <InputLabel id="start">Начало</InputLabel>
                    <Input
                        id="start"
                        type="number"
                        inputProps={{ min: minValue, max: maxValue }}
                        value={startValue}
                        onChange={(e) => {
                            setStartValue(parseInt(e.target.value))
                        }}
                    />
                </FormControl>
                <FormControl
                    variant="standard"
                    className={styles.rangeSelect__inputContainer}
                >
                    <InputLabel id="start">Конец</InputLabel>
                    <Input
                        id="end"
                        type="number"
                        inputProps={{ min: minValue, max: maxValue }}
                        value={endValue}
                        onChange={(e) => {
                            setEndValue(parseInt(e.target.value))
                        }}
                    />
                </FormControl>
                <Button
                    size="small"
                    onClick={() => {
                        if (startValue > endValue) {
                            alert(
                                'Начальное значение не может быть больше конечного!'
                            )
                        } else {
                            valueType === 'string' &&
                                store.addfilters(filtersType, [
                                    String(startValue),
                                    String(endValue),
                                ])
                            valueType === 'number' &&
                                store.addfilters(filtersType, [
                                    startValue,
                                    endValue,
                                ])
                        }
                    }}
                    variant="contained"
                >
                    Показать
                </Button>
            </div>
        )
    }
)

export default RangeSelect
