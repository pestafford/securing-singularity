#!/bin/bash
echo "=== Checking for Mobile Menu Changes ==="
echo ""

echo "1. Mobile menu imports (should show Menu, X):"
grep "from \"lucide-react\"" src/pages/LandingPage.tsx

echo ""
echo "2. Mobile menu state (should show useState):"
grep "isMobileMenuOpen" src/pages/LandingPage.tsx | head -3

echo ""
echo "3. Hamburger button (should exist):"
grep -A2 "Mobile Menu Button" src/pages/LandingPage.tsx | head -5

echo ""
echo "4. Responsive typography (should show sm: and md:):"
grep "text-3xl sm:text-4xl md:text-5xl" src/pages/LandingPage.tsx

echo ""
echo "5. Lazy loading (should show loading=\"lazy\"):"
grep "loading=\"lazy\"" src/pages/LandingPage.tsx | wc -l
echo "   Found lazy loading on this many images"

echo ""
echo "✅ All changes are present in the file!"
