

export default function AutomaticRequires()
{
    require.context('./', true, /[^.].\.tsx?$/);
}