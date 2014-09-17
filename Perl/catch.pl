	

use LWP::Simple;
use HTML::LinkExtor;
use strict;
my $html = get("http://www.59136s.com/");
my @array=();
my $count=0;
open(FILE_HANDLE,">url_list.txt") or die;


my $link_extor = HTML::LinkExtor->new(\&handle_links);

 $link_extor->parse($html);

sub handle_links
{
   my ($tag, %links) = @_;
   my $key;
    if ($tag eq 'a') {

        foreach $key (keys %links) {

            if ($key eq 'href') {

                print "Found a hyperlink to $links{$key}\n";
		$count++;
        	push(@array,$links{$key});
            }

        }
    }
}
my $url;
foreach $url(@array){
print FILE_HANDLE "$url\n";
}
close(FILE_HANDLE);
print "All count is $count";

