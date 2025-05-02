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
                <a
                  href="/attributions"
                  className="hover:text-primary transition-colors text-center block"
                  aria-label="View resource attributions"
                >
                  View Resource Attributions
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
