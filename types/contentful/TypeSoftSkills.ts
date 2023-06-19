import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSoftSkillsFields {
    skill: EntryFieldTypes.Symbol;
    position: EntryFieldTypes.Integer;
}

export type TypeSoftSkillsSkeleton = EntrySkeletonType<TypeSoftSkillsFields, "softSkills">;
export type TypeSoftSkills<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSoftSkillsSkeleton, Modifiers, Locales>;
