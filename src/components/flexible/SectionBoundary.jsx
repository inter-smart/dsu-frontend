"use client";

import { Component } from "react";

// Isolates one CMS section: if it throws (e.g. a field the editor left empty), only that section is
// skipped instead of the whole page showing "This page couldn't load".
export default class SectionBoundary extends Component {
    state = { failed: false };

    static getDerivedStateFromError() {
        return { failed: true };
    }

    componentDidCatch(error) {
        console.error("Section failed to render and was skipped:", error);
    }

    render() {
        return this.state.failed ? null : this.props.children;
    }
}
