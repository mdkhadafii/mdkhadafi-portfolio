import { timeline } from "../../features/portfolio";

function sortByStartYear(items) {
  return [...items].sort((first, second) => {
    const firstYear = Number.parseInt(first.year.match(/\d{4}/)?.[0] ?? "0", 10);
    const secondYear = Number.parseInt(second.year.match(/\d{4}/)?.[0] ?? "0", 10);

    return firstYear - secondYear;
  });
}

export default function Experience() {
  const columns = [
    {
      title: "Pendidikan",
      items: sortByStartYear(timeline.filter((item) => item.type === "Education"))
    },
    {
      title: "Pengalaman",
      items: sortByStartYear(timeline.filter((item) => item.type !== "Education"))
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-kicker">Experience</span>
          <h2>Timeline pendidikan dan pengalaman.</h2>
          <p>
            Timeline dipisahkan agar riwayat pendidikan dan pengalaman lebih mudah dibaca secara
            berdampingan.
          </p>
        </div>

        <div className="timeline-layout" data-stagger>
          {columns.map((column) => (
            <div className="timeline-column" key={column.title} data-stagger-item>
              <h3 className="timeline-column__title">{column.title}</h3>

              <div className="timeline">
                {column.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article className="timeline__item" key={`${item.year}-${item.title}`}>
                      <div className="timeline__marker">
                        <Icon size={20} />
                      </div>

                      <div className="timeline__content">
                        <div className="timeline__meta">
                          <span>{item.type}</span>
                          <span>{item.year}</span>
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
