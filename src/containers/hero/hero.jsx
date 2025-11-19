import React from 'react'
import '../../i18n.js'
import { useTranslation } from 'react-i18next'
import './hero.scss'

export function Hero() {
    const { t } = useTranslation();
    return (
        <div className="bio-container standard-structure">
            <h1>Nicolas Morin</h1>
            <p>{t("Bio")}</p>
        </div>
    )
}