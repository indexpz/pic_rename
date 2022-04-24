import React from 'react'
import "./Info.css"

export default function Info() {
    return (
        <div className="info--container">
            <h2><span>Pic </span>Ranamer</h2>
            <p>
                Pic Reanamer – jest to aplikacja do zmiany nazw plików jpg, jpeg i png.
            </p>
            <p>
                Zmiana polega na dodaniu wymiarów rzeczywistych w pikeslach do nazwy pliku.
                Obecnie wymiary dodawane są na końcu obecnej nazwy, a przed rozszerzeniem, gdzie pierwsza wartość to
                szerokość a druga to wysokość (np. _300x250px_).
            </p>
            <h4>Funkcje</h4>
            <p>Aplikacja pokazuje obraz pliku.
                Jeżeli plik jest większy niż obszar wyświetlania przeglądarki plik jest skalowany, tak aby było widać
                całość, jeżeli jest mniejszy wyświetlany jest w rzeczywistych wymiarach.</p>
            <p>Pod obrazkiem wyświetlanie jest okno dialogowe w którym pokazane są informaje o wymiarach, oriętacyjnej
                wiekości pliku, nazwie pliku i nowej nazwie pliku.</p>

            <h4>Jak korzystać</h4>
            <ul>
                <li>Do okna dialogowego upuść pliki może być ich więcej niż jeden;</li>
                <li>Można także kliknąć w okno dialogowe i wybrać pliki;</li>
                <li>W każdej chwili można dodać nowe pliki;</li>
                <li>Po kliknęciu w przycisk "Zapisz" plik zostanie zapisany na dysku;</li>
                <li>Po kliknięciu w "Usuń" plik zostanie usunięty z okna przeglądarki.</li>
            </ul>

            <h4>Dodatkowe informacje</h4>
            <p>Pliki są pobierane lokalnie do przeglądarki i nie są nigdzie wysyłane.</p>
           <p> Obecnie nie są zbierane żadne dane, w przyszłości może się to zmienić i dane będą zbierane w celach statystycznych.
        </p>
            <h4>Road map</h4>
            <ul>
                <li>Trwają pracę nad dodaniem opcji zapisywania nazwy pliku aby można było wybrać gdzie i jak zapisać nazwę np. na początku nazwy pliku, najpierw wysokość;</li>
                <li>Dodanie opcji zapisu nazwy z zamianą wszystkich spacji na podkteślenia "_" lub myśliniki "-";</li>
                <li>Możliwość nanoszenia poprawek graficznych na plik w celu korekty.</li>
            </ul>
</div>
)

}