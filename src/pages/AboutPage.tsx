import image from '../images/image.webp'

export default function AboutPage() {
    return (
        <>
            <h1>О сервисе</h1>

            <img
                    src={image}
                    alt="Загрязнение окружающей среды"
                    width="300" style={{float: 'left', margin: '0 2em 1em 0'}}
                />
            <p>Сервис для получения информации о загрязнениях в населенных пунктах.</p>
        </>
    );
}