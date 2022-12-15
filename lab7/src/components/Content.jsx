import React from 'react'

export class Content extends React.Component {
    randomNum() {
        return Math.floor(Math.random() * 255);
    }

    randomColor() {
        return 'rgb(' + this.randomNum() + ',' + this.randomNum() + ',' + this.randomNum() + ')';
    }

    changeById() {
        const color = this.randomColor();
        document.getElementById('ninthElement').style.backgroundColor = color;
    }

    changeByClass() {
        const color = this.randomColor();
        document.querySelector('.tenthElement').style.backgroundColor = color;
    }

    render() {
        return (<>
            <p>Хоббі: </p>
            <ul>
                <li>спорт</li>
                <li>танці</li>
                <li>водіння</li>
                <li id="ninthElement" onClick={() => this.changeById()}>плавання</li>
                <li className="tenthElement" onClick={() => this.changeByClass()}>читання</li>
                <li>в'язання</li>
            </ul>

            <p>Улюблені фільми: </p>
            <ol>
                <li>"Побег из Шоушенка"</li>
                <li>"Крёстный отец"</li>
                <li>"Тёмный рыцарь"</li>
                <li>"12 обнаженных мужчин"</li>
            </ol>

            <p>
                Кра́ків (пол. Kraków, нім. Krakau, лат. Cracovia) — місто в Польщі на березі Вісли, 782 тисячі жителів (2021), з найближчими передмістями 1,5 млн. Адміністративний центр Малопольського воєводства.

                Друге за величиною та кількістю мешканців місто в Польщі після Варшави; одне з найстаріших міст Польщі, з тисячолітньою історією, багатою культурною та архітектурною спадщиною. У період Австро-Угорщини один з центрів Західної Галичини.
            </p>
        </>);
    }
}