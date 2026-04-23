import abbyImg from "@/assets/abby-portrait.jpg";
import tomImg from "@/assets/tom-portrait.jpg";

const team = [
  {
    name: "Abby",
    image: abbyImg,
    bio: "Founder and lead strategist behind the fertility reset process. Abby focuses on identifying what may be lowering conception readiness and building the detoxification, nutrition, supplement, and lifestyle plan to optimize the body for pregnancy.",
    large: true,
  },
  {
    name: "Tom",
    image: tomImg,
    bio: "Tom leads the deeper support side of the process, helping clients stay consistent, emotionally steady, and on track through the ups and downs of trying to conceive.",
    large: false,
  },
];

export function TeamSection() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-charcoal lg:text-4xl">Meet your team</h2>
        <div className="mx-auto mt-14 grid max-w-4xl gap-10 md:grid-cols-2">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                loading="lazy"
                width={640}
                height={800}
                className={`rounded-xl object-cover shadow-md ${member.large ? "h-72 w-56" : "h-64 w-48"}`}
              />
              <h3 className="mt-6 text-xl font-bold text-charcoal">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}