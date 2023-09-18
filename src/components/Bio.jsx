
export default function Bio() {
  return (
    <div className="h-max bg-gray-800">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
              <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                <img className="rounded-lg object-cover shadow-lg" src={require('./Rob.png')} alt="" />
              </div>
              <div className="sm:col-span-2">
                <div className="space-y-2">
                  <div className="text-white text-lg font-medium leading-6">
                    <h3>Rob Giometti</h3>
                    <p>Co-Founder & CEO at <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.sapien.network"
                      className="text-purple-600"
                    >Sapien Network</a>
                    </p>
                  </div>
                  <div className="text-lg">
                    <p className="text-gray-300 text-left">I’m Rob, a visionary technologist passionate about building technology
                    to improve the human experience.  I study and build at the intersection of technology,
                    economics, culture and society. Our society is at a turning point and to overcome the problems we face
                    we need to rethink our relation with nature and with each other. I believe social technology is a powerful tool
                    that can help us reshape our culture and build a sustainable future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
