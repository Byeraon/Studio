import style from "./price.module.css";
import { Packet } from "./onePacket/onePacket";

export let Price = () => {
  return (
    <div className={style.page}>
      <h1
        style={{ margin: "10vh 0", textAlign: "center" }}
        className="gold_text"
      >
        УСЛУГИ
      </h1>
      <div className={style.block_packets}>
        <Packet
          price="3500 руб."
          name="Экспресс"
          masPos={[
            "1 час записи вокала",
            "Автотюн при желании",
            "Помощь в постановке голоса",
            "Помощь с текстом",
            "Помощь в расстановке ритмики",
            "2 часа сведения",
            "Добавление дополнительных эффектов",
            "Программный мастеринг",
          ]}
        />
        <Packet
          price="7000 руб."
          name="Оптимум"
          masPos={[
            "2 часа записи вокала",
            "Автотюн при желании",
            "Ручная коррекция вокала",
            "Помощь в постановке голоса",
            "Помощь с текстом",
            "Помощь в расстановке ритмики",
            "3 часа сведения",
            "Добавление дополнительных эффектов",
            "Программный мастеринг",
          ]}
        />
        <Packet
          price="15000 руб."
          name="Трек под ключ"
          masPos={[
            "Написание аранжировки",
            "4 часа записи вокала",
            "Автотюн при желании",
            "Ручная коррекция вокала",
            "Помощь в постановке голоса",
            "Написание текста",
            "Помощь в расстановке ритмики",
            "4 часа сведения",
            "Добавление дополнительных эффектов",
            "Программный мастеринг",
          ]}
        />
      </div>
    </div>
  );
};
