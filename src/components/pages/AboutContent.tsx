import { temple, PENDING } from "@/content/temple";

import heritage from "@/assets/heritage.jpg";

import devotees from "@/assets/devotees.jpg";

export function AboutContent() {
  return (
    <>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2">
        <img
          width={1200}
          height={1008}
          src={heritage}
          alt="Representative carved temple corridor"
          className="aspect-[5/4] w-full rounded-3xl object-cover"
        />
        <div>
          <h2 className="text-3xl">Sri Veerabhadrakali Temple</h2>
          <p className="mt-4 text-muted-foreground">
            This website brings together temple information for devotees and visitors. The temple
            administration will confirm its overview, mission and spiritual significance before
            publication.
          </p>
          {["Mission and community", "Traditions and worship", "Spiritual significance"].map(
            (title) => (
              <section key={title} className="mt-7">
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 text-muted-foreground">
                  {PENDING}. Approved information will be shared here.
                </p>
              </section>
            ),
          )}
        </div>
      </div>
    </>
  );
}
