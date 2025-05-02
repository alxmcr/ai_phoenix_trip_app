export default function Footer() {
  return (
    <footer className="py-12 border-t bg-muted/30 flex justify-center items-center w-full">
      <div className="container">
        <div className="mt-12 pt-8 border-t border-border/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Phoenix Trip. All rights reserved.
            </div>
            <nav aria-label="Resource attributions">
              <div className="text-xs text-muted-foreground">
                <h2 className="text-center font-medium mb-2">Resource Attributions</h2>
                <ul className="space-y-1">
                  <li>
                    <a
                      href="https://www.vecteezy.com/free-vector/travel"
                      className="hover:text-primary transition-colors text-center"
                      aria-label="Travel vector illustrations by Vecteezy"
                    >
                      Travel Vectors by Vecteezy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vecteezy.com/free-vector/background"
                      aria-label="Background vector illustrations by Vecteezy"
                    >
                      Background Vectors by Vecteezy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vecteezy.com/free-vector/hawaii"
                      aria-label="Hawaii vector illustrations by Vecteezy"
                    >
                      Hawaii Vectors by Vecteezy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://worldvectorlogo.com/"
                      aria-label="Logo resources by Worldvectorlogo"
                    >
                      Logos by Worldvectorlogo
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vecteezy.com/free-vector/sunset"
                      aria-label="Sunset vector illustrations by Vecteezy"
                    >
                      Sunset Vectors by Vecteezy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.vecteezy.com/free-vector/mountain-night"
                      aria-label="Mountain night vector illustrations by Vecteezy"
                    >
                      Mountain Night Vectors by Vecteezy
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
