// app/page.tsx
"use client";

import { useRef, useState } from "react";

type MomentProps = {
  title: string;
  date: string;
  description: string;
  images: string[];
  link?: string;
};

function MomentCard({ title, date, description, images, link }: MomentProps) {
  const content = (
    <div className="rounded-xl overflow-hidden border border-pink-500/30 bg-white/5 flex flex-col hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/30 transition">
      {/* foto utama */}
      <img
        src={images[0]}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-sm flex-1 flex flex-col">
        <p className="text-pink-300 font-semibold mb-1">
          {title}
        </p>
        <p className="text-[11px] text-pink-200 mb-2">
          {date}
        </p>
        <p className="text-pink-100 mb-3">
          {description}
        </p>

        {/* galeri kecil */}
        {images.length > 1 && (
          <div className="mt-auto grid grid-cols-3 gap-2">
            {images.slice(1).map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`${title} extra ${idx + 1}`}
                className="w-full h-16 object-cover rounded-md opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );

  // kalau ada link, bungkus dengan <a> yang buka tab baru
  return link ? (
    <a href={link} target="" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-900 via-slate-900 to-black text-white">
      {/* HERO + LAGU */}
      <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Untuk Kamu, Yang Jauh Tapi Selalu Dekat.
        </h1>
        <p className="max-w-xl text-sm md:text-lg text-pink-100 mb-8">
          Di antara jarak dan waktu, ada satu tempat di mana kita selalu bertemu:
          di sini, di setiap kenangan dan harapan yang pelan-pelan kita tulis bersama.
        </p>

        <button
          onClick={togglePlay}
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-400 text-sm md:text-base font-semibold shadow-lg shadow-pink-500/40 transition"
        >
          {isPlaying ? "Jeda Lagu Kita" : "Putar Lagu Kita"}
        </button>

        <audio ref={audioRef} src="/music/Best_Part.mp3" loop />

        <p className="mt-4 text-xs text-pink-200">
          Tap tombol di atas untuk mulai dengar lagu kita.
        </p>
      </section>

      {/* TIMELINE MOMENT */}
      <section className="py-16 px-4 bg-black/40 backdrop-blur">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            Cerita Kita
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 1. Awal ketemu – 18 Okt */}
            <MomentCard
              title="Hari Kita Bertemu"
              date="18 Oktober – Proker kampus"
              description="Hari itu kita cuma dua orang yang kebetulan dipasangkan di sebuah program kampus. Tidak ada yang istimewa di mata orang lain, tapi buatku, itu hari di mana hidup pelan-pelan mengarahkan langkahku ke arahmu."
              images={[
                "/images/momen1(1).jpg",
                "/images/momen1(2).jpg",
                "/images/momen1(3).jpg",
              ]}
              link="/momen/momen1.html"
            />

            {/* 2. Jadian di Teluk Love – 26 Okt */}
            <MomentCard
              title="Teluk Love & Kata 'Iya'"
              date="26 Oktober – Teluk Love"
              description="Di Teluk Love, ombaknya mungkin biasa saja, tapi jantungku tidak. Di tempat itu, aku memberanikan diri meminta sesuatu yang besar: izin untuk menjaga hatimu."
              images={[
                "/images/momen2(1).jpg",
                "/images/momen2(2).jpg",
                "/images/momen2(3).jpg",
              ]}
              link="/images/momen2(1).jpg"
            />

            {/* 3. 12 Des – Date */}
            <MomentCard
              title="12 Desember yang Hangat"
              date="12 Desember"
              description="12 Desember, mungkin bagi dunia hanya tanggal biasa. Tapi buatku, itu hari di mana senyummu terasa lebih hangat dari biasanya."
              images={[
                "/images/momen3(1).jpg",
                "/images/momen3(2).jpg",
                "/images/momen3(3).jpg",
              ]}
              link="/images/momen3(1).jpg"
            />

            {/* 4. 16 Des – Date */}
            <MomentCard
              title="16 Desember, Kita & Cerita"
              date="16 Desember"
              description="Di momen ini, aku ingat bagaimana kita ngobrol entah soal apa saja, dari hal penting sampai hal receh yang bikin ketawa. Rasanya waktu berjalan pelan hanya untuk kita."
              images={[
                "/images/momen4(1).jpg",
                "/images/momen4(2).jpg",
                "/images/momen4(3).jpg",
              ]}
              link="/images/momen4(1).jpg"
            />

            {/* 5. Foto Studio – 20 Des */}
            <MomentCard
              title="Foto Studio, Versi Terbaik Kita"
              date="20 Desember – Foto studio"
              description="Di depan kamera, kita diminta untuk tersenyum. Tapi jujur, bersamamu, aku tidak pernah perlu berpura-pura."
              images={[
                "/images/momen5(1).jpg",
                "/images/momen5(2).jpg",
                "/images/momen5(3).jpg",
              ]}
              link="/images/momen5(1).jpg"
            />

            {/* 6. 5 Jan – Permintaan maaf */}
            <MomentCard
              title="Untuk Hari Ketika Kamu Menangis"
              date="5 Januari"
              description="5 Januari adalah hari yang paling tidak ingin aku ulangi, hari ketika aku membuatmu menangis karena kesalahan dan ketidakpekaanku sendiri. Aku tidak bisa menghapus hari itu, tapi aku janji akan menjadikannya pengingat bahwa aku tidak boleh lagi bermain-main dengan hatimu."
              images={[
                "/images/momen6(1).jpg",
                "/images/momen6(2).jpg",
                "/images/momen6(3).jpg",
              ]}
              link="/images/momen6(1).jpg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
