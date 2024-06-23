import React, { FC } from 'react'
import styles from './styles.module.scss'
import RangeSelect from '../RangeSelect/RangeSelect'

interface ActionPanelProps {
}

const ActionPanel: FC<ActionPanelProps> = () => {
    const year = new Date().getFullYear()
    return (
        <div className={styles.actionPanel}>
            <RangeSelect minValue={1990} maxValue={year} filtersType="year" />
        </div>
    )
}

export default ActionPanel
