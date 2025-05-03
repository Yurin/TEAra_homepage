export default function Home() {
    return (
      <main className="w-full min-h-screen bg-white">
        {/* セクション1：キャッチコピー */}
        <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-b from-green-100 to-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">ようこそ TEAra へ！</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl">
          TEAraは、「何かを作ってみたい」「アウトプットしてみたい」――そんな想いを持つ人が集まる、お茶の水女子大学の開発コミュニティです。
「プログラミングに興味ある！」そんな人たちが集まって、
ワークショップや勉強会、ハッカソンをゆるく楽しくやってます☕️
初めてでも大歓迎！まずはこのハッカソンから一緒にやってみませんか？
          </p>
        </section>
  
        {/* セクション2：画像やバナー */}
        <section className="flex justify-center py-12">
        </section>
  
        {/* セクション3：CTA */}
        <section className="text-center py-16 bg-green-100">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            2025年春のハッカソン、開催中！
          </h3>
          <p className="text-gray-700 mb-6">初心者でも大丈夫！Reactでサイトを作ろう</p>
          <a
            href="https://example.com/apply"
            className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-teal-600 transition"
          >
            参加はこちらから
          </a>
        </section>
      </main>
    )
  }
  